import { memo, useCallback, useEffect } from "react";
import cls from "./ArticlesPage.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ArticleList } from "@/entities/Article";
import { ArticleListView } from "@/entities/Article/model/types/Article";
import { DynamicModuleLoader, ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articlesPageActions, articlesPageReducer, getArticles } from "../../model/slices/articlesPageSlice";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";
import { useSelector } from "react-redux";
import { 
	getArticlesPageError,
	getArticlesPageHasMore,
	getArticlesPageIsLoading,
	getArticlesPageNum,
	getArticlesPageView 
} from "../../model/selectors/ArticlePageSelectors";
import { ChangeArticleListView } from "@/features/ChangeArticleListView";
import { Page } from "@/shared/ui/Page/Page";
import { fetchLoadArticles } from "../../model/services/fetchLoadArticles/fetchLoadArticles";

interface ArticlesPageProps {
	className?: string
}

const reducers: ReducersList = {
	articlesPage: articlesPageReducer
};

const ArticlesPage = ({ className } : ArticlesPageProps) => {

	const dispatch = useAppDispatch();
	
	const articles = useSelector(getArticles.selectAll);
	const isLoading = useSelector(getArticlesPageIsLoading);
	const error = useSelector(getArticlesPageError);
	const view = useSelector(getArticlesPageView);
	
	const hasMore = useSelector(getArticlesPageHasMore);
	const page = useSelector(getArticlesPageNum);
	
	const onChangeView = useCallback(
		(view: ArticleListView) => {
			dispatch(articlesPageActions.setView(view));
		}, [dispatch],
	);
		
	// const onLoadArticle = useCallback(
	// 	() => {
	// 		dispatch(fetchLoadArticles());
	// 	}, [dispatch]
	// );

	const onLoadArticle = useCallback(
		() => {
			if(hasMore && !isLoading) {
				dispatch(articlesPageActions.setPage(page + 1));
				dispatch(fetchArticlesList({ page: page + 1 }));
			}
		}, [dispatch, hasMore, isLoading, page]
	);
		
	useEffect(() => {
		dispatch(articlesPageActions.initView());
		dispatch(fetchArticlesList({ page: 1 }));
	}, [dispatch]);

	return (
		<DynamicModuleLoader reducers={reducers} >
			<Page onScrollEnd={onLoadArticle} className={classNames(cls.ArticlesPage, {}, [className])}>
				<ChangeArticleListView  view={view} onViewClick={onChangeView}/>	
				<ArticleList
					isLoading={isLoading}
					view={view}
					articles={articles}
					error={error}
				/>
			</Page>
		</DynamicModuleLoader>
		
	);
};

export default memo(ArticlesPage);
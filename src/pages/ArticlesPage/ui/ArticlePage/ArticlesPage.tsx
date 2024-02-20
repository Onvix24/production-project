import { memo, useCallback, useEffect } from "react";
import cls from "./ArticlesPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Skeleton } from "shared/ui/Skeleton";
import { Article, ArticleList } from "entities/Article";
import { ArticleListView } from "entities/Article/model/types/Article";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articlesPageActions, articlesPageReducer, getArticles } from "../../model/slices/articlesPageSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchArticlesList } from "../../model/services/fetchArticlesList";
import { useSelector } from "react-redux";
import { 
	getArticlesPageError,
	getArticlesPageIsLoading,
	getArticlesPageView 
} from "../../model/selectors/ArticlePageSelectors";
import { ChangeArticleListView } from "features/ChangeArticleListView";

interface ArticlesPageProps {
	className?: string
}

const reducers: ReducersList = {
	articlesPage: articlesPageReducer
};

const ArticlesPage = ({ className } : ArticlesPageProps) => {

	const dispath = useAppDispatch();
	
	const articles = useSelector(getArticles.selectAll);
	const isLoading = useSelector(getArticlesPageIsLoading);
	const error = useSelector(getArticlesPageError);
	const view = useSelector(getArticlesPageView);

	const onChangeView = useCallback(
	  (view: ArticleListView) => {
			dispath(articlesPageActions.setView(view));
		}, [dispath],
	);
	

	useEffect(() => {
		dispath(fetchArticlesList());
		dispath(articlesPageActions.initView());
	}, [dispath]);

	return (
		<DynamicModuleLoader reducers={reducers} >
			<div className={classNames(cls.ArticlesPage, {}, [className])}>
				<ChangeArticleListView  view={view} onViewClick={onChangeView}/>
				<ArticleList
					isLoading={isLoading}
					view={view}
					articles={articles}
					error={error}
				/>
			</div>
		</DynamicModuleLoader>
	);
};

export default memo(ArticlesPage);
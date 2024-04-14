import { memo, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { ChangeArticleListView } from "@/features/ChangeArticleListView";
import { ArticleList, ArticleListView } from "@/entities/Article";
import { classNames } from "@/shared/lib/classNames/classNames";
import { DynamicModuleLoader, ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Page } from "@/shared/ui/Page/Page";
import {
	getArticlesPageError,
	getArticlesPageHasMore,
	getArticlesPageIsLoading,
	getArticlesPageView,
} from "../../model/selectors/ArticlePageSelectors";
import { fetchLoadArticles } from "../../model/services/fetchLoadArticles/fetchLoadArticles";
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";
import { articlesPageActions, articlesPageReducer, getArticles } from "../../model/slices/articlesPageSlice";
import { ArticlesPageFilters } from "../ArticlesPageFilters";
import cls from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
	className?: string;
}

const reducers: ReducersList = {
	articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
	const dispatch = useAppDispatch();
	const articles = useSelector(getArticles.selectAll);
	const isLoading = useSelector(getArticlesPageIsLoading);
	const error = useSelector(getArticlesPageError);
	const view = useSelector(getArticlesPageView);
	const hasMore = useSelector(getArticlesPageHasMore);

	const [searchParams] = useSearchParams();

	const onChangeView = useCallback(
		(view: ArticleListView) => {
			dispatch(articlesPageActions.setView(view));
		},
		[dispatch],
	);

	const onLoadArticle = useCallback(() => {
		dispatch(fetchLoadArticles());
	}, [dispatch]);

	useEffect(() => {
		dispatch(initArticlesPage(searchParams));
	}, [dispatch, searchParams]);

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
			<Page
				onScrollEnd={onLoadArticle}
				className={classNames(cls.ArticlesPage, {}, [className])}
			>
				<div className={cls.ArticlesPage__contentWrapper}>
					<ChangeArticleListView view={view} onViewClick={onChangeView} />
					<ArticleList
						isLoading={isLoading}
						view={view}
						articles={articles}
						error={error}
					/>
					<ArticlesPageFilters className={cls.ArticlesPage__filters} />
				</div>
				<Button
					className={cls.ArticlesPage__button}
					theme={ButtonTheme.OUTLINE}
					onClick={onLoadArticle}
					disabled={!hasMore}
				>
					Load more
				</Button>
			</Page>
		</DynamicModuleLoader>
	);
};

export default memo(ArticlesPage);

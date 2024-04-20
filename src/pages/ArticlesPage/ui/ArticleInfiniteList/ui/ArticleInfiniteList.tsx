import { memo } from "react";
import { useSelector } from "react-redux";
import { ArticleList, ArticleListView } from "@/entities/Article";
import { classNames } from "@/shared/lib/classNames/classNames";
import { getArticlesPageIsLoading, getArticlesPageError, getArticlesPageHasMore } from "../../../model/selectors/ArticlePageSelectors";
import { getArticles } from "../../../model/slices/articlesPageSlice";
import cls from "./ArticleInfiniteList.module.scss";

interface ArticleInfiniteListProps {
	className?: string
	view: ArticleListView;
	onLoadArticle: () => void;
}

export const ArticleInfiniteList = memo(({ className, view, onLoadArticle } : ArticleInfiniteListProps) => {
	const articles = useSelector(getArticles.selectAll);
	const isLoading = useSelector(getArticlesPageIsLoading);
	const error = useSelector(getArticlesPageError);
	const hasMore = useSelector(getArticlesPageHasMore);

	return (
		// <div className={classNames(cls.ArticleInfiniteList, {}, [className])}>
		<ArticleList
			isLoading={isLoading}
			view={view}
			articles={articles}
			error={error}
			hasMore={hasMore}
			onLoadArticle={onLoadArticle}
		/>
		// </div>
	);
});

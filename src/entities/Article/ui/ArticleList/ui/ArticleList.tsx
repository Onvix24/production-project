import { HTMLAttributeAnchorTarget, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Article, ArticleListView } from "../../../model/types/Article";
import { ArticleListItem } from "../../ArticleListItem";
import { ArticleListItemSkeleton } from "../../ArticleListItem/ui/ArticleListItemSkeleton";
import cls from "./ArticleList.module.scss";

interface ArticleListProps {
	className?: string,
	articles: Article[],
	isLoading?: boolean,
	error?: string;
	view?: ArticleListView;
	target?: HTMLAttributeAnchorTarget;
	onLoadArticle?: () => void;
	hasMore?: boolean;
}

const getSkeletons = (view: ArticleListView) => new Array(view === ArticleListView.GRID ? 9 : 3)
	.fill(0)
	.map(() => (
		<ArticleListItemSkeleton className={cls.card} key={Math.random()} view={view} />
	));

export const ArticleList = memo((props : ArticleListProps) => {
	const {
		articles, view = ArticleListView.GRID, className, error, isLoading, target, onLoadArticle, hasMore,
	} = props;

	if (isLoading) {
		return (
			<div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
				{getSkeletons(view)}
			</div>
		);
	}

	const renderArticleItem = (article: Article) => (
		<ArticleListItem
			article={article}
			view={view}
			key={article.id}
			target={target}
		/>
	);

	if (!isLoading && !articles.length) {
		return (
			<div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
				<div>Cтатті не знайдені</div>
			</div>
		);
	}

	return (
		<div className={classNames(cls.ArticleList, {}, [className])}>
			<div className={classNames(cls.ArticleList__list, {}, [className, cls[view]])}>
				{articles.length > 0
					? articles.map(renderArticleItem)
					: error}
				{isLoading && getSkeletons(view)}
			</div>
			{
				hasMore && (
					<Button
						className={cls.ArticleList__button}
						theme={ButtonTheme.OUTLINE}
						onClick={onLoadArticle}
						disabled={!hasMore}
					>
						Load more
					</Button>
				)
			}
		</div>
	);
});

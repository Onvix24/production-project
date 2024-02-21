import cls from "./ArticleList.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import { Article, ArticleListView } from "@/entities/Article/model/types/Article";
import { ArticleListItem } from "../../ArticleListItem";
import { ArticleListItemSkeleton } from "../../ArticleListItem/ui/ArticleListItemSkeleton";

interface ArticleListProps {
	className?: string,
	articles: Article[],
	isLoading?: boolean,
	error?: string;
	view?: ArticleListView;
}

const getSkeletons = (view: ArticleListView) => new Array(view === ArticleListView.GRID ? 9 : 3)
	.fill(0)
	.map((item, index) => (
		<ArticleListItemSkeleton className={cls.card} key={index} view={view} />
	));

export const ArticleList = memo((props : ArticleListProps) => {
	
	const { articles, view = ArticleListView.GRID , className, error, isLoading } = props;

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
		 />
	);

	return (		
		<div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
			{articles.length > 0
				? articles.map(renderArticleItem)
				: error
			}
		</div>
	);
});
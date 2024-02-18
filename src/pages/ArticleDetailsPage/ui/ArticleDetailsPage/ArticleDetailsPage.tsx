import cls from "./ArticleDetailsPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { ArticleDetails } from "entities/Article";
import { useParams } from "react-router-dom";
import { CommentList } from "entities/Comment";
import { useGetCommentsQuery } from "shared/api/rtkQueryApi";
import { AddArticleComments } from "features/AddArticleComments";

interface ArticleDetailsPageProps {
	className?: string,
}

const ArticleDetailsPage = ({ className } : ArticleDetailsPageProps) => {
	
	const { id } = useParams<{id: string}>();
	const { data, isLoading, error } = useGetCommentsQuery(Number(id));

	
	if (!id) {
		return (
			<div>
				Стаття не найдена
			</div>
		);
	}

	return (
		<div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
			<ArticleDetails articleId={id}/>
			<AddArticleComments articleId={id}/>
			<CommentList comments={data}/>
		</div>
	);
};

export default memo(ArticleDetailsPage);

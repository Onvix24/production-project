import { memo } from "react";
import { AddArticleComments } from "@/features/AddArticleComments";
import { CommentList, useGetCommentsQuery } from "@/entities/Comment";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ArticleComments.module.scss";

interface ArticleCommentsProps {
	className?: string;
	id: string;
}

export const ArticleComments = memo(({ className, id }: ArticleCommentsProps) => {
	const { data, isLoading } = useGetCommentsQuery(Number(id));

	return (
		<div className={classNames(cls.ArticleComments, {}, [className])}>
			<AddArticleComments articleId={id} isLoading={isLoading} />
			<CommentList comments={data} isLoading={isLoading} />
		</div>
	);
});

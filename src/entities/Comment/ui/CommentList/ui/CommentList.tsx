import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Comment } from "../../../model/types/Comment";
import { CommentCard } from "../../CommentCard";
import cls from "./CommentList.module.scss";
import { CommentListSkeleton } from "./CommentListSkeleton";

interface CommentListProps {
	className?: string;
	comments?: Comment[];
	isLoading?: boolean;
}

export const CommentList = memo(({ className, comments, isLoading } : CommentListProps) => {
	if (isLoading) {
		return (
			<CommentListSkeleton />
		);
	}

	return (
		<div className={classNames(cls.CommentList, {}, [className])}>
			<h2 className={cls.CommentList__title}>Коментарі</h2>
			{
				comments?.length
					?	comments.map((comment) => (
						<CommentCard key={comment.id} comment={comment} />
					))
					: <div>No comments</div>
			}
		</div>
	);
});

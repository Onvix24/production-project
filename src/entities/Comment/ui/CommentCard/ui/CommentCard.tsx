import cls from "./CommentCard.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import { Comment } from "../../../model//types/Comment";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { Skeleton } from "@/shared/ui/Skeleton";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { RoutePath } from "@/shared/config/routeConfig/routeConfig";

interface CommentCardProps {
	className?: string;
	comment: Comment;
	isLoading?: boolean;
}

export const CommentCard = memo(({ className, comment, isLoading } : CommentCardProps) => {
	
	if (isLoading) {
		return (
			<div className={classNames(cls.CommentCard, {}, [className])}>
				<div className={cls.CommentCard__header}>
					<Skeleton className={cls.CommentCard__avatar} width={30} height={30} border="50%"/>
					<Skeleton className={cls.CommentCard__username} height={16} width={150} border="12px"/>
				</div>
				<Skeleton className={cls.CommentCard__text} width={"100%"} height={40} border="12px"/>
			</div>
		);
	}


	return (
		<div className={classNames(cls.CommentCard, {}, [className])}>
			<AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.CommentCard__header}>
				{ comment.user.avatar 
					? <Avatar src={comment.user.avatar} size={30} className={cls.CommentCard__avatar}/>
				 	: null 
				}
				<div className={cls.CommentCard__username}>{comment.user.username}</div>
			</AppLink>
			<div className={cls.CommentCard__text}>{comment.text}</div>
		</div>
	);
});
import { Skeleton } from "@/shared/ui/Skeleton";
import cls from "./CommentList.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface CommentListSkeletonProps {
    className?: string
}

export const CommentListSkeleton = ({ className } : CommentListSkeletonProps) => {
    
	return (
		<div className={classNames(cls.CommentList, {}, [className])}>
			<div className={classNames(cls.CommentList__card, {}, [className])}>
				<div className={cls.CommentList__header}>
					<Skeleton className={cls.CommentList__avatar} width={30} height={30} border="50%"/>
					<Skeleton className={cls.CommentList__username} height={16} width={150} border="12px"/>
				</div>
				<Skeleton className={cls.CommentList__text} width={"100%"} height={40} border="12px"/>
			</div>
			<div className={classNames(cls.CommentList__card, {}, [className])}>
				<div className={cls.CommentList__header}>
					<Skeleton className={cls.CommentList__avatar} width={30} height={30} border="50%"/>
					<Skeleton className={cls.CommentList__username} height={16} width={150} border="12px"/>
				</div>
				<Skeleton className={cls.CommentList__text} width={"100%"} height={40} border="12px"/>
			</div>
			<div className={classNames(cls.CommentList__card, {}, [className])}>
				<div className={cls.CommentList__header}>
					<Skeleton className={cls.CommentList__avatar} width={30} height={30} border="50%"/>
					<Skeleton className={cls.CommentList__username} height={16} width={150} border="12px"/>
				</div>
				<Skeleton className={cls.CommentList__text} width={"100%"} height={40} border="12px"/>
			</div>
		</div>
	);
};
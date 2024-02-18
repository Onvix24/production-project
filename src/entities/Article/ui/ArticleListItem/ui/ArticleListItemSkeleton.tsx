import { ArticleListView } from "entities/Article/model/types/Article";
import cls from "./ArticleListItem.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Skeleton } from "shared/ui/Skeleton";
import { Card } from "shared/ui/Card/Card";

interface ArticleListItemSkeletonProps {
    className?: string,
    view?: ArticleListView,
}

export const ArticleListItemSkeleton = ({ className, view } : ArticleListItemSkeletonProps) => {
    
	if(view === ArticleListView.COLUMN) {
	
		return (
			<div className={classNames(cls.ArticleListItem, {}, [className, cls.ArticleListItem_column])}>
				<Card className={cls.ArticleListItem__card}>
					<div className={cls.ArticleListItem__header}>
						<Skeleton width={32} height={32} border="50%"/>
						<Skeleton width={100} height={20} border="12px" className={cls.ArticleListItem__username} />
						<Skeleton width={40} height={20} border="12px"/>
					</div>
					<div className={cls.ArticleListItem__bottom}>
						<Skeleton width={700} height={50} border="12px" className={cls.ArticleListItem__title} />
						<Skeleton width={700} height={30} border="12px" className={cls.ArticleListItem__subtitle} />
						<Skeleton height={420} width={732} border="12px"/>
						<Skeleton width={732} height={100} border="12px"/>
						<div className={cls.ArticleListItem__details}>
							<Skeleton width={120} height={30} border="12px" className={cls.ArticleListItem__readMore} />
							<div className={cls.ArticleListItem__wathers}>
								<Skeleton
								 	width={30} height={30} border="50%"
									className={cls.ArticleListItem__icon}
								/>
								<Skeleton 
									width={100} height={30} border="12px"
								 	className={cls.ArticleListItem__views}
								  />
							</div>
						</div>
					</div>
				</Card>
			</div>
		);
	}

	return (
		<div className={classNames(cls.ArticleListItem, {}, [className, cls.ArticleListItem_grid])}>
			<Card>
				<Skeleton width={249} height={141} className={cls.ArticleListItem__image} />
				<div className={cls.ArticleListItem__contentWrapper}>
					<Skeleton border="12px" width={230} height={20} className={cls.ArticleListItem__title} />
					<div className={cls.ArticleListItem__details}>
						<Skeleton border="12px" width={70} height={20} className={cls.ArticleListItem__createdAt} />
						<div className={cls.ArticleListItem__wathers}>
							<Skeleton border="12px" width={20}  height={20} className={cls.ArticleListItem__icon} />
							<Skeleton border="12px" width={40} height={20} className={cls.ArticleListItem__views} />
						</div>
					</div>
					<div className={cls.ArticleListItem__userWrapper}>
						<Skeleton width={32} height={32} border="50%" />
						<Skeleton border="12px" width={70} height={20} className={cls.ArticleListItem__creator} />
					</div>
				</div>
			</Card>
		</div>
	);
};
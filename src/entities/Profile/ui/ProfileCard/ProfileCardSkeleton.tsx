import { Skeleton } from "@/shared/ui/Skeleton";
import cls from "./ProfileCard.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface ProfileCardSkeletonProps {
    className?: string
}

export const ProfileCardSkeleton = ({ className } : ProfileCardSkeletonProps) => {
        
	return (
		<div className={classNames(cls.ProfileCard, {}, [className])}>
			<div className={cls.ProfileCard__row}>
				<div className={cls.ProfileCard__column}>
					<Skeleton width={400} height={30} border="12px"/>
					<Skeleton width={400} height={30} border="12px"/>
					<Skeleton width={400} height={30} border="12px"/>
					<Skeleton width={400} height={30} border="12px"/>
				</div>
				<div className={cls.ProfileCard__column}>
					<Skeleton width={400} height={30} border="12px"/>
					<Skeleton width={400} height={30} border="12px"/>
					<Skeleton width={400} height={30} border="12px"/>
					<Skeleton width={400} height={30} border="12px"/>
				</div>
			</div>
		</div>
	);
};
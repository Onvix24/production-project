import { Skeleton } from "shared/ui/Skeleton";
import cls from "./ArticleDetails.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface ArticleDetailsProps {
    className?: string
}

export const ArticleDetailsSkeleton = ({ className } : ArticleDetailsProps) => {
        
	return (
		<div className={classNames(cls.ArticleDetails, {}, [className, cls.ArticleDetails__list])}>
			<div className={classNames(cls.ArticleDetails__top, {}, [className])}>
			    <div className={cls.ArticleDetails__box}>
    			    <Skeleton width={32} height={32} border="50%"/>	
        			<Skeleton width={152} height={32} border="32px"/>
    			</div>
    			<div className={cls.ArticleDetails__content}>
    			    <Skeleton width={"100%"} height={38} border="8px"/>
        			<Skeleton width={"95%"} height={38} border="8px"/>
        			<Skeleton width={"85%"} height={27} border="8px"/>
    			</div>
			</div>
			<Skeleton className={cls.ArticleDetails__image} width={"100%"} height={420} border="16px"/>
			<div className={classNames(cls.ArticleDetails__bottom, {}, [className])}>
			    <div className={cls.ArticleDetails__desc}>
    			    <Skeleton width={"90%"} height={17} border="4px"/>
        			<Skeleton width={"85%"} height={17} border="4px"/>
        			<Skeleton width={"95%"} height={17} border="4px"/>
    			</div>
    			<div className={cls.ArticleDetails__readmore}>
    			    <Skeleton width={144} height={23} border="16px"/>
        			<Skeleton width={56} height={23} border="22px"/>
    			</div>
			</div>
		</div>
	);
};
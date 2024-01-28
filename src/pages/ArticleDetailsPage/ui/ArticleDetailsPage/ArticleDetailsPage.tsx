import { useTranslation } from "react-i18next";
import cls from "./ArticleDetailsPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";

interface ArticleDetailsPageProps {
	className?: string
}

const ArticleDetailsPage = ({ className } : ArticleDetailsPageProps) => {
	
	const { t } = useTranslation();
	
	return (
		<div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
			ArticleDetailsPage
		</div>
	);
};

export default memo(ArticleDetailsPage);
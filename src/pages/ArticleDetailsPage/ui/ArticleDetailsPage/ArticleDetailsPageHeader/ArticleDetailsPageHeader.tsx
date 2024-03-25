import { useNavigate } from "react-router-dom";
import cls from "./ArticleDetailsPageHeader.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { RoutePath } from "@/shared/config/routeConfig/routeConfig";
import { useCallback } from "react";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { getCanEditArticleSelector } from "@/pages/ArticleDetailsPage/model/selectors/getCanEditArticleSelector";
import { useSelector } from "react-redux";
import { 
	getArticleDetailsData
} from "@/entities/Article/model/selectors/ArticleDetails/getArticleDetailsData/getArticleDetailsData";

interface ArticleDetailsPageHeaderProps {
    className?: string
}

export const ArticleDetailsPageHeader = ({ className } : ArticleDetailsPageHeaderProps) => {
    
	const navigate = useNavigate();
	const canEdit = useSelector(getCanEditArticleSelector);
	const article = useSelector(getArticleDetailsData);
	
	const onBackToList = useCallback(() => {
		navigate(RoutePath.articles);
	}, [navigate]);

	const onEditArticle = useCallback(() => {
		navigate(`${RoutePath.article_details}${article?.id}/edit`);
	}, [article?.id, navigate]);

	return (
		<div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
			<Button 
				className={cls.ArticleDetailsPageHeader__button}
				theme={ButtonTheme.OUTLINE}
				onClick={onBackToList}
			>
					Back to list
			</Button>
			{ canEdit && <Button 
            	className={cls.ArticleDetailsPageHeader__button}
            	theme={ButtonTheme.OUTLINE}
            	onClick={onEditArticle}
			>
                Edit article
			</Button>
			}
		</div>
	);
};
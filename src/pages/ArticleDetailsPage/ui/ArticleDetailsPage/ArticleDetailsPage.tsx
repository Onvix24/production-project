import { memo } from "react";
import { useParams } from "react-router-dom";
import { ArticleRecommendationsList } from "@/features/ArticleRecommendationsList";
import { ArticleDetails, articleDetailsReducer } from "@/entities/Article";
import { classNames } from "@/shared/lib/classNames/classNames";
import { DynamicModuleLoader, ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Page } from "@/shared/ui/Page/Page";
import {
	articleDetailsPageRecommendationsReducer,
} from "../../model/slice/articleDetailsPageRecomendationsSlice";
import { ArticleComments } from "../ArticleComments";
import cls from "./ArticleDetailsPage.module.scss";
import { ArticleDetailsPageHeader } from "./ArticleDetailsPageHeader/ArticleDetailsPageHeader";

interface ArticleDetailsPageProps {
	className?: string,
}

const redusers: ReducersList = {
	articleDetails: articleDetailsReducer,
	articleDetailsRecommendations: articleDetailsPageRecommendationsReducer,
};

const ArticleDetailsPage = ({ className } : ArticleDetailsPageProps) => {
	const { id } = useParams<{ id: string }>();

	if (!id) {
		return (
			<Page>
				Стаття не найдена
			</Page>
		);
	}

	return (
		<DynamicModuleLoader reducers={redusers} removeAfterUnmount>
			<Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
				<ArticleDetailsPageHeader className={cls.ArticleDetailsPage__header} />
				<div className={cls.ArticleDetailsPage__content}>
					<ArticleDetails articleId={id} />
					<ArticleRecommendationsList />
					<ArticleComments id={id} />
				</div>
			</Page>
		</DynamicModuleLoader>
	);
};

export default memo(ArticleDetailsPage);

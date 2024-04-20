import { FC } from "react";
import { ArticleList } from "@/entities/Article";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useGetArticleRecommendationsListApiQuery } from "../../api/ArticleRecomendationsListApi";
import cls from "./ArticleRecommendationsList.module.scss";

interface ArticleRecommendationsListProps {
	className?: string
}

export const ArticleRecommendationsList: FC<ArticleRecommendationsListProps> = ({ className }) => {
	const { data, isLoading } = useGetArticleRecommendationsListApiQuery(3);

	console.log(data);

	if (!data) {
		return null;
	}

	return (
		<div className={classNames(cls.ArticleRecommendationsList, {}, [className])}>
			<div className={cls.ArticleRecommendationsList__recommendations}>Рекомендуємі статті</div>
			<ArticleList
				articles={data}
				isLoading={isLoading}
				target="_blank"
			/>
		</div>
	);
};

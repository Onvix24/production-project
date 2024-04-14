import { memo, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AddArticleComments } from "@/features/AddArticleComments";
import { ArticleDetails, ArticleList, articleDetailsReducer } from "@/entities/Article";
import { CommentList } from "@/entities/Comment";
import { useGetCommentsQuery } from "@/shared/api/rtkQueryApi";
import { classNames } from "@/shared/lib/classNames/classNames";
import { DynamicModuleLoader, ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Page } from "@/shared/ui/Page/Page";
import {
	getArticleRecommendationsIsLoading,
} from "../../model/selectors/recommendationsSelectors";
import {
	fetchArticleRecommendations,
} from "../../model/services/fetchArticleRecommendations/fetchArticleRecommendations";
import {
	articleDetailsPageRecommendationsReducer,
	getArticleRecommendations,
} from "../../model/slice/articleDetailsPageRecomendationsSlice";
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
	const dispatch = useAppDispatch();

	const { id } = useParams<{ id: string }>();
	const { data, isLoading } = useGetCommentsQuery(Number(id));
	const recommendationsArticles = useSelector(getArticleRecommendations.selectAll);
	const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

	useEffect(() => {
		dispatch(fetchArticleRecommendations());
	}, [dispatch]);

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
					<div className={cls.ArticleDetailsPage__recommendations}>Рекомендуємі статті</div>
					<ArticleList
						articles={recommendationsArticles}
						isLoading={recommendationsIsLoading}
						target="_blank"
					/>
					<AddArticleComments articleId={id} isLoading={isLoading} />
					<CommentList comments={data} isLoading={isLoading} />
				</div>
			</Page>
		</DynamicModuleLoader>
	);
};

export default memo(ArticleDetailsPage);

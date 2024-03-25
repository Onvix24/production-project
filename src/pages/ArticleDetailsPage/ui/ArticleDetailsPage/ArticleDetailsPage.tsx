import cls from "./ArticleDetailsPage.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { memo, useCallback, useEffect } from "react";
import { ArticleDetails, ArticleList } from "@/entities/Article";
import { useNavigate, useParams } from "react-router-dom";
import { CommentList } from "@/entities/Comment";
import { useGetCommentsQuery } from "@/shared/api/rtkQueryApi";
import { AddArticleComments } from "@/features/AddArticleComments";
import { Page } from "@/shared/ui/Page/Page";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { RoutePath } from "@/shared/config/routeConfig/routeConfig";
import { useSelector } from "react-redux";
import { 
	getArticleRecommendationsIsLoading
} from "../../model/selectors/recommendationsSelectors";
import { 
	articleDetailsPageRecommendationsReducer,
	getArticleRecommendations
} from "../../model/slice/articleDetailsPageRecomendationsSlice";
import { DynamicModuleLoader, ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "@/entities/Article/model/slice/articleDetailsSlice";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { 
	fetchArticleRecommendations
} from "../../model/services/fetchArticleRecommendations/fetchArticleRecommendations";
import { ArticleDetailsPageHeader } from "./ArticleDetailsPageHeader/ArticleDetailsPageHeader";

interface ArticleDetailsPageProps {
	className?: string,
}

const redusers: ReducersList = {
	articleDetails: articleDetailsReducer,
	articleDetailsRecommendations: articleDetailsPageRecommendationsReducer  
};

const ArticleDetailsPage = ({ className } : ArticleDetailsPageProps) => {
	
	const dispatch = useAppDispatch();

	const { id } = useParams<{id: string}>();
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
					<ArticleDetails articleId={id}/>
					<div className={cls.ArticleDetailsPage__recommendations}>Рекомендуємі статті</div>
					<ArticleList 
						articles={recommendationsArticles} 
						isLoading={recommendationsIsLoading}
						target="_blank"
					/>
					<AddArticleComments articleId={id} isLoading={isLoading}/>
					<CommentList comments={data} isLoading={isLoading}/>
				</div>
			</Page>
		</DynamicModuleLoader>
	);
};

export default memo(ArticleDetailsPage);

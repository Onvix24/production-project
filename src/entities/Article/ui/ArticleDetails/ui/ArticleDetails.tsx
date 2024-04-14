import { memo, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import {
	getArticleDetailsData,
} from "../../../model/selectors/ArticleDetails/getArticleDetailsData/getArticleDetailsData";
import {
	getArticleDetailsError,
} from "../../../model/selectors/ArticleDetails/getArticleDetailsError/getArticleDetailsError";
import {
	getArticleDetailsIsLoading,
} from "../../../model/selectors/ArticleDetails/getArticleDetailsIsLoading/getArticleDetailsIsLoading";
import { fetchArticleById } from "../../../model/services/fetchArticlesById/fetchArticleById";
import { ArticleBlock } from "../../../model/types/Article";
import { ArticleCodeBlockComponent } from "../../ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../../ArticleImageBlock";
import { ArticleTextBlockComponent } from "../../ArticleTextBlockComponent";
import cls from "./ArticleDetails.module.scss";
import { ArticleDetailsSkeleton } from "./ArticleDetailsSkeleton";

interface ArticleDetailsProps {
	className?: string,
	articleId: string;
}

// const redusers: ReducersList = {
// 	articleDetails: articleDetailsReducer,
// 	articleDetailsRecommendations: articleDetailsPageRecommendationsReducer
// };

export const ArticleDetails = memo(({ className, articleId } : ArticleDetailsProps) => {
	const dispatch = useAppDispatch();

	const data = useSelector(getArticleDetailsData);
	const isLoading = useSelector(getArticleDetailsIsLoading);
	// const isLoading = true;
	const error = useSelector(getArticleDetailsError);

	useEffect(() => {
		dispatch(fetchArticleById(articleId));
	}, [dispatch, articleId]);

	const renderBlock = useCallback((block: ArticleBlock) => {
		switch (block.type) {
			case "TEXT":
				return (
					<ArticleTextBlockComponent
						className={cls.ArticleTextBlockComponent}
						block={block}
						key={block.id}
					/>
				);
			case "IMAGE":
				return (
					<ArticleImageBlockComponent
						className={cls.ArticleImageBlockComponent}
						block={block}
						key={block.id}
					/>
				);
			case "CODE":
				return (
					<ArticleCodeBlockComponent
						className={cls.ArticleCodeBlockComponent}
						block={block}
						key={block.id}
					/>
				);
			default:
				return null;
		}
	}, []);

	let content;

	if (isLoading) {
		content = (
			<ArticleDetailsSkeleton />
		);
	}
	if (error) {
		content = (
			<div>error</div>
		);
	}

	if (data) {
		(
			content = (
				<div className={classNames(cls.ArticleDetails, {}, [className, cls.ArticleDetails__list])}>
					<div className={classNames(cls.ArticleDetails__top, {}, [className])}>
						<div className={cls.ArticleDetails__box}>
							<Avatar src={data?.img} size={32} />
							<span>Onvix TV</span>
							<span
								className={cls.ArticleDetails__date}
							>
								{data?.createdAt}
							</span>
						</div>
						<div className={cls.ArticleDetails__content}>
							<h2 className={cls.ArticleDetails__title}>
								{data?.title}
							</h2>
							<h3
								className={cls.ArticleDetails__subtitle}
							>
								{data?.subtitle}
							</h3>
						</div>
					</div>
					<img
						width={732}
						height={420}
						src={data?.img}
					/>
				</div>
			)
		);
	}

	return (
		// <DynamicModuleLoader reducers={redusers} removeAfterUnmount>
		<div className={classNames(cls.ArticleDetails, {}, [className])}>
			{content}
			{data?.blocks.map(renderBlock)}
		</div>
		// </DynamicModuleLoader>
	);
});

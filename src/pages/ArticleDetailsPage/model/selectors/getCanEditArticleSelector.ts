import { 
	getArticleDetailsData
} from "@/entities/Article/model/selectors/ArticleDetails/getArticleDetailsData/getArticleDetailsData";
import { getUserAuthData } from "@/entities/User";
import { createSelector } from "@reduxjs/toolkit";

export const getCanEditArticleSelector = createSelector(
	getUserAuthData,
	getArticleDetailsData,
	(user, article) => {
		if (!user || !article) {
			return false;
		}
		console.log(article.user.id);
		console.log(user.id);
		return article.user.id === user.id;
	}
);
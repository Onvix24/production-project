import { createSelector } from "@reduxjs/toolkit";
import {
	getArticleDetailsData,
} from "@/entities/Article";
import { getUserAuthData } from "@/entities/User";

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
	},
);

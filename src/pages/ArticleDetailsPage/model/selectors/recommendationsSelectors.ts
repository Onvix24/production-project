import { StateSchema } from "@/app/providers/StoreProvider";

export const getArticleRecommendationsIsLoading = (state: StateSchema) => {
	return state.articleDetailsRecommendations?.isLoading;
};

export const getArticleRecommendationsEntities = (state: StateSchema) => {
	return state.articleDetailsRecommendations?.entities;
};

export const getArticleRecommendationsError = (state: StateSchema) => {
	return state.articleDetailsRecommendations?.error;
};

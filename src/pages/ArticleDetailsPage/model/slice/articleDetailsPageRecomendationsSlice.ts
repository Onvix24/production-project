import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/StoreProvider";
import { Article } from "@/entities/Article";
import { fetchArticleRecommendations } from "../services/fetchArticleRecommendations/fetchArticleRecommendations";
import { ArticleDetailsPageRecomendationsSchema } from "../types/ArticleDetailsPageRecomendationsSchema";

const recommendationsAdapter = createEntityAdapter<Article>({
	selectId: (article) => article.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
	// (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState(),
	(state) => state.articleDetailsRecommendations || recommendationsAdapter.getInitialState(),
);

const articleDetailsPageRecommendationsSlice = createSlice({
	name: "articleDetailsPageRecommendationsSlice",
	initialState: recommendationsAdapter.getInitialState<ArticleDetailsPageRecomendationsSchema>({
		isLoading: false,
		error: undefined,
		ids: [],
		entities: {},
	}),
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticleRecommendations.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(fetchArticleRecommendations.fulfilled, (
				state,
				action,
			) => {
				state.isLoading = false;
				recommendationsAdapter.setAll(state, action.payload);
			})
			.addCase(fetchArticleRecommendations.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const {
	reducer: articleDetailsPageRecommendationsReducer,
} = articleDetailsPageRecommendationsSlice;

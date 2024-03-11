import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ArticleDetailsSchema } from "../types/ArticleDetailsSchema";
import { Article } from "../types/Article";
import { fetchArticleById } from "../services/fetchArticlesById/fetchArticleById";

const initialState: ArticleDetailsSchema = {
};

export const articleDetailsSlice = createSlice({
	name: "articleDetails",
	initialState,
	reducers: {
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticleById.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(fetchArticleById.fulfilled, (
				state, 
				action: PayloadAction<Article>
			) => {
				state.isLoading = false;
				state.data = action.payload;
			})
			.addCase(fetchArticleById.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	}
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import {
	getArticlesPageHasMore,
	getArticlesPageIsLoading,
	getArticlesPageNum,
} from "../../selectors/ArticlePageSelectors";
import { articlesPageActions } from "../../slices/articlesPageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

export const fetchLoadArticles = createAsyncThunk<void, void, ThunkConfig<string>>(
	"articlesPage/fetchLoadArticles",
	async (_, thunkApi) => {
		const { getState, dispatch } = thunkApi;

		const hasMore = getArticlesPageHasMore(getState());
		const page = getArticlesPageNum(getState());
		const isLoading = getArticlesPageIsLoading(getState());

		if (hasMore && !isLoading) {
			dispatch(articlesPageActions.setPage(page + 1));
			dispatch(fetchArticlesList({}));
		}
	},
);

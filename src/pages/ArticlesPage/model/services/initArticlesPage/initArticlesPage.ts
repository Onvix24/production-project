import { createAsyncThunk } from "@reduxjs/toolkit";
import { articlesPageActions } from "../../slices/articlesPageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { getArticlesPageInited } from "../../selectors/ArticlePageSelectors";
import { ArticlesSortField, OrderSort } from "../../types/articlesPageSchema";

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
    >(
    	"articlesPage/initArticlesPage",
    	async (searchParams, thunkApi) => {
    		const { getState, dispatch } = thunkApi;
    		const inited = getArticlesPageInited(getState());

    		if (!inited) {
    			const orderFromUrl = searchParams.get("order") as OrderSort;
    			const sortFromUrl = searchParams.get("sort") as ArticlesSortField;
    			const searchFromUrl = searchParams.get("search");

    			if (orderFromUrl) {
    				dispatch(articlesPageActions.setOrder(orderFromUrl));
    			}
    			if (sortFromUrl) {
    				dispatch(articlesPageActions.setSort(sortFromUrl));
    			}
    			if (searchFromUrl) {
    				dispatch(articlesPageActions.setSearch(searchFromUrl));
    			}

    			dispatch(articlesPageActions.initView());
    			dispatch(fetchArticlesList({}));
    		}
    	},
    );

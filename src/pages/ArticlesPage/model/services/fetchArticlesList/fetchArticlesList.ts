import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Article } from "@/entities/Article";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localStorage";
import { getArticlesPageLimit } from "../../selectors/ArticlePageSelectors";

interface FetchArticlesListProps {
	page: number;
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
    	"articlesPage/fetchArticlesList",
    	async (props, thunkApi) => {
    		const { extra, rejectWithValue, getState } = thunkApi;
		
		const { page = 1 } = props;
		const limit = getArticlesPageLimit(getState());

		try {
			const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || "";
			const encodedToken = encodeURIComponent(token);
			

			const response = await extra.api.get<Article[]>("/articles", {
				headers: {
					"Authorization": `${encodedToken}`			
				},
				params: {
					_expand: "user",
					_page: page,
					_limit: limit,
				}
			});

			if (!response.data) {
				throw new Error();
			}

			return response.data;
		} catch (e) {
			return rejectWithValue("error");
		}
	},
);
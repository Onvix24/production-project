import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Article, ArticleType } from "@/entities/Article";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localStorage";
import { 
	getArticlesPageLimit, 
	getArticlesPageNum, 
	getArticlesPageOrder, 
	getArticlesPageSearch, 
	getArticlesPageSort, 
	getArticlesPageType
} from "../../selectors/ArticlePageSelectors";
import { addQueryParams } from "@/shared/lib/url/addQuaryParams/addQuaryParams";

interface FetchArticlesListProps {
	replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
    	"articlesPage/fetchArticlesList",
    	async (props, thunkApi) => {
    		const { extra, rejectWithValue, getState } = thunkApi;
		
		const limit = getArticlesPageLimit(getState());
		const order = getArticlesPageOrder(getState());
		const sort = getArticlesPageSort(getState());
		const search = getArticlesPageSearch(getState());
		const page = getArticlesPageNum(getState());
		const type = getArticlesPageType(getState());
		
		try {
			const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || "";
			const encodedToken = encodeURIComponent(token);
			
			addQueryParams({
				sort, order, search, type
			});

			const response = await extra.api.get<Article[]>("/articles", {
				headers: {
					"Authorization": `${encodedToken}`			
				},
				params: {
					_expand: "user",
					_page: page,
					_limit: limit,
					_sort: sort,
					_order: order,
					q: search,
					type: type === ArticleType.ALL ? undefined : type
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
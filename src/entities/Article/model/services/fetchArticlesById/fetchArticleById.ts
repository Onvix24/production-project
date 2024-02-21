import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Article } from "../../types/Article";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localStorage";

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
	"profile/fetchArticleById",
	async (articleId, thunkApi) => {
		const { rejectWithValue, extra } = thunkApi;
        
		try {
			const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || "";
			const encodedToken = encodeURIComponent(token);
			
			const response = await extra.api.get<Article>(`/articles/${articleId}?_expand=user`, {
				headers: {
					"Authorization": `${encodedToken}`			
				}
			}); 
			
			if (!response.data) {
				throw new Error();
			}

			return response.data;            
		} catch (error) {
			console.log(error);
			return rejectWithValue("error");
		}
	}
);
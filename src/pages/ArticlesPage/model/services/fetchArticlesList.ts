import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Article } from "@/entities/Article";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localStorage";

export const fetchArticlesList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    	"articlesPage/fetchArticlesList",
    	async (articleId, thunkApi) => {
    		const { extra, rejectWithValue } = thunkApi;

    		try {
			    const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || "";
			    const encodedToken = encodeURIComponent(token);
                

    			const response = await extra.api.get<Article[]>("/articles", {
	    			headers: {
		    			"Authorization": `${encodedToken}`			
			    	},
		    		params: {
				    	_expand: "user",
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
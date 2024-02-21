import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Profile } from "../../types/profile";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localStorage";

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
	"profile/fetchProfileData",
	async (id, thunkApi) => {
		const { rejectWithValue, extra } = thunkApi;
		try {
			const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || "";
			const encodedToken = encodeURIComponent(token);

			const response = await extra.api.get<Profile>(`/profile/${id}`, {
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
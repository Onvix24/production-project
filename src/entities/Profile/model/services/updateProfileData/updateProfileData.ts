import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Profile, ValidateProfileError } from "../../types/profile";
import { validateProfileData } from "../validateProfileData/validateProfileData";
import { getProfileFormData } from "../../selectors/getProfileFormData/getProfileFormData";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localStorage";

export const updateProfileData = createAsyncThunk<Profile, string, ThunkConfig<ValidateProfileError[]>>(
	"profile/updateProfileData",
	async (profileId, thunkApi) => {
		const { rejectWithValue, extra, getState } = thunkApi;
		
		const formData = getProfileFormData(getState());
	
		const errors = validateProfileData(formData);

		if (errors.length) {
			return rejectWithValue(errors);
		}

		const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || "";
		const encodedToken = encodeURIComponent(token);
		
		try {	
			const response = await extra.api.put<Profile>(`/profile/	${profileId}`, formData, {
				headers: {
					"Authorization": `${encodedToken}`			
				}
			}); 
			
			console.log(response.data);
			return response.data;		

		} catch (error) {
			console.log(error);
			return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
		}
	}
);
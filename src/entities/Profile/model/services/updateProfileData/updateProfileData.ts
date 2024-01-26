import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Profile, ValidateProfileError } from "../../types/profile";
import { validateProfileData } from "../validateProfileData/validateProfileData";
import { getProfileFormData } from "../../selectors/getProfileFormData/getProfileFormData";

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
	"profile/updateProfileData",
	async (_, thunkApi) => {
		const { rejectWithValue, extra, getState } = thunkApi;
		
		const formData = getProfileFormData(getState());
	
		const errors = validateProfileData(formData);

		if (errors.length) {
			return rejectWithValue(errors);
		}

		try {	
			const response = await extra.api.put<Profile>("/profile", formData); 
			
			console.log(response.data);
			return response.data;		

		} catch (error) {
			console.log(error);
			return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
		}
	}
);
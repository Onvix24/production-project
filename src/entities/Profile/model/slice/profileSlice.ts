import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Profile, ProfileSchema } from "../types/profile";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";

const initialState: ProfileSchema  = {
	data: undefined,
	rendonly: true,
	isLoading: false,
	error: undefined
};

export const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {
		readonly: (state, action: PayloadAction<boolean>) => {
			state.rendonly = action.payload;
		},
		cancelEdit: (state) => {
			state.rendonly = true;
			state.validateErrors = undefined;
			state.formData = state.data;
		},
		updateProfile: (state, action: PayloadAction<Profile>) => {
			state.formData = {
				...state.formData,
				...action.payload,
			};
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProfileData.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(fetchProfileData.fulfilled, (
				state, 
				action: PayloadAction<Profile>
			) => {
				state.isLoading = false;
				state.data = action.payload;
				state.formData = action.payload;
			})
			.addCase(fetchProfileData.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(updateProfileData.pending, (state) => {
				state.validateErrors = undefined;
				state.isLoading = true;
			})
			.addCase(updateProfileData.fulfilled, (
				state, 
				action: PayloadAction<Profile>
			) => {
				state.isLoading = false;
				state.data = action.payload;
				state.formData = action.payload;
				// state.data = state.formData;
				state.rendonly = true;
			})
			.addCase(updateProfileData.rejected, (state, action) => {
				state.isLoading = false;
				state.validateErrors = action.payload;
			});	
	},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
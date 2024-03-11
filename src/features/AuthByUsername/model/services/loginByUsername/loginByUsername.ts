import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { User, userActions } from "@/entities/User";
// import { User, userActions } from "../../../../../entities/User/";
import i18n from "@/shared/config/i18n/i18n";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localStorage";

interface LoginByUsernameProps {
    username: string;
    password: string
}

export const loginByUsername = 	createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
	"login/loginByUsername",
	async (authData, thunkApi) => {
		const { dispatch, rejectWithValue, extra } = thunkApi;
		
		const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || "";
		const encodedToken = encodeURIComponent(token);

		try {
			const response = await extra.api.post<User>("/login", authData, {
				headers: {
					"Authorization": `${encodedToken}`
				}
			}); 
			
			if(!response.data) {
				throw new Error();
			}

			localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
			dispatch(userActions.setAuthData(response.data));
			return response.data;
		} catch (error) {
			console.log(error);
			return rejectWithValue(i18n.t("Ви ввели неправильний логін або пароль"));
		}
	}
);
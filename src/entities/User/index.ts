import { getUserAuthData } from "./model/selectors/getUserAuthData/getUserAuthData";
import { userActions, userReducer } from "./model/slice/userSlice";
import { User, UserSchema } from "./model/types/user";

export {
	userActions,
	userReducer,
	type User,
	type UserSchema,
	getUserAuthData
};

export  { getUserMounted } from "./model/selectors/getUserMounted/getUserMounted";
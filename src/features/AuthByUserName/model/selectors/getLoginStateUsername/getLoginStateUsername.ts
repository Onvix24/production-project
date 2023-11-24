import { StateSchema } from "app/providers/StoreProvider";

export const getloginStateUsername = (state: StateSchema) => state.loginForm?.username;
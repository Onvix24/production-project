import { StateSchema } from "app/providers/StoreProvider";

export const getloginStatePassword = (state: StateSchema) => state.loginForm?.password;
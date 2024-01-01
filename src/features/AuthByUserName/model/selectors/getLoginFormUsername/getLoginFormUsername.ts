import { StateSchema } from "app/providers/StoreProvider";

export const getLoginFormUsername = (state: StateSchema) => state.loginForm?.username || "";
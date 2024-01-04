import { StateSchema } from "app/providers/StoreProvider";

export const getLoginFormError = (state: StateSchema) => state.loginForm?.error;

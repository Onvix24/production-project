import { StateSchema } from "app/providers/StoreProvider";

export const getloginStateError = (state: StateSchema) => state.loginForm?.error;
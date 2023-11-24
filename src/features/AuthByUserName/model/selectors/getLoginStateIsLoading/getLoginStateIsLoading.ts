import { StateSchema } from "app/providers/StoreProvider";

export const getLoginStateIsLoading = (state: StateSchema) => state?.loginForm.isLoading;
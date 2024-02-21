import { StateSchema } from "@/app/providers/StoreProvider";

export const getLoginFormIsLoading = (state: StateSchema) => state?.loginForm?.isLoading || false;
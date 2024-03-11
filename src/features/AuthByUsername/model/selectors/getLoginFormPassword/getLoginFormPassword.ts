import { StateSchema } from "@/app/providers/StoreProvider";

export const getLoginFormPassword = (state: StateSchema) => state.loginForm?.password || "";
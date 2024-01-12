import { StateSchema } from "app/providers/StoreProvider";

export const getProfileiSLoading = (state: StateSchema) => state.profile?.isLoading;
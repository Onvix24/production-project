import type { ReduxStoreWithManager, StateSchema, ThunkConfig } from "./config/StateSchema";
import { createReduxStore, AppDispatch } from "./config/store";
import { StoreProvider } from "./ui/StoreProvider";

export {
	createReduxStore,
	StoreProvider,

};

export type {
	StateSchema,
	ReduxStoreWithManager,
	AppDispatch,
	ThunkConfig,
};

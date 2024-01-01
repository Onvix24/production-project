import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "entities/Counter";
// import { counterReducer } from "../../../../entities/Counter";
import { userReducer } from "entities/User";
import { loginReducer } from "features/AuthByUsername";
import { createReducerManager } from "./reducerManager";

export function createReduxStore(initialState?: StateSchema) {

	const rootRedusers: ReducersMapObject<StateSchema> = {
		counter: counterReducer,
		user: userReducer,
	};

	const reducerManager = createReducerManager(rootRedusers);

	const store = configureStore<StateSchema>({
		reducer: reducerManager.reduce,
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});

	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
}

// export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
// export type RootState = ReturnType<ReturnType<typeof createReduxStore>["getState"]>;
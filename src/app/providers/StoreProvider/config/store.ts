import { CombinedState, Reducer, ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema, ThunkExtraArguments } from "./StateSchema";
import { counterReducer } from "@/entities/Counter";
import { userReducer } from "@/entities/User";
import { createReducerManager } from "./reducerManager";
import { $api } from "@/shared/api/api";
import { To, NavigateOptions } from "react-router-dom";
import { rtkQueryApi } from "@/shared/api/rtkQueryApi";

export function createReduxStore(
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>,
	navigate?: (to: To, options?: NavigateOptions) => void,
) {
	const rootRedusers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		counter: counterReducer,
		user: userReducer,
		[rtkQueryApi.reducerPath]: rtkQueryApi.reducer,
	};

	const reducerManager = createReducerManager(rootRedusers);

	const extraArgument: ThunkExtraArguments = {
		api: $api,
		navigate
	};

	const store = configureStore({
		reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware({
			thunk: {
				extraArgument
			},
		}).concat(rtkQueryApi.middleware),
	});

	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
// export type RootState = ReturnType<ReturnType<typeof createReduxStore>["getState"]>;
import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "../../../../entities/Counter/model/slice/counterSlice";
import { userReducer } from "entities/User";

export function createReduxStore(initialState?: StateSchema) {

	const rootRedusers: ReducersMapObject<StateSchema> = {
		counter: counterReducer,
		user: userReducer
	};

	return configureStore<StateSchema>({
		reducer: rootRedusers,
		devTools: __IS_DEV__,
		preloadedState: initialState
	});
}
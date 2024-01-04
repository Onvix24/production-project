import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { StoryFn } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { loginReducer } from "features/AuthByUsername";

const defaultAsyncReducer: DeepPartial<ReducersMapObject<StateSchema>> = {
	loginForm: loginReducer
};
export const StoreDecorator = (
	state: DeepPartial<StateSchema>,
	asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
// eslint-disable-next-line react/display-name
) => (StoryComponent: StoryFn) => (
	<StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducer,  ...asyncReducers }}>
		<StoryComponent />
	</StoreProvider>
);
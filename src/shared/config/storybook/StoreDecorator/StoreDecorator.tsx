/* eslint-disable @conarti/feature-sliced/layers-slices */
import { StoryFn } from "@storybook/react";
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import { loginReducer } from "@/features/AuthByUsername";
import { profileReducer } from "@/entities/Profile";
import { ReducersList } from "../../../lib/components/DynamicModuleLoader/DynamicModuleLoader";

const defaultAsyncReducer: ReducersList = {
	loginForm: loginReducer,
	profile: profileReducer,
};
export const StoreDecorator = (
	state: DeepPartial<StateSchema>,
	asyncReducers?: ReducersList,
) => (StoryComponent: StoryFn) => (
	<StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducer, ...asyncReducers }}>
		<StoryComponent />
	</StoreProvider>
);

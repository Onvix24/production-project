import { StoryFn } from "@storybook/react";
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import { profileReducer } from "@/entities/Profile";
import { loginReducer } from "@/features/AuthByUsername";
import { ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const defaultAsyncReducer: ReducersList = {
	loginForm: loginReducer,
	profile: profileReducer
};
export const StoreDecorator = (
	state: DeepPartial<StateSchema>,
	asyncReducers?: ReducersList
) => (StoryComponent: StoryFn) => (
	<StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducer,  ...asyncReducers }}>
		<StoryComponent />
	</StoreProvider>
);
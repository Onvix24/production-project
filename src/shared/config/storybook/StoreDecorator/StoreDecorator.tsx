import { DeepPartial } from "@reduxjs/toolkit";
import { StoryFn } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";

// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: StoryFn) => (
	<StoreProvider initialState={state}>
		<StoryComponent />
	</StoreProvider>
);
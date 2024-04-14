import { StoryFn } from "@storybook/react";
import { Theme } from "../../../contexts/ThemeContext";

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
	<div className={`app ${theme}`}>
		<StoryComponent />
	</div>
);

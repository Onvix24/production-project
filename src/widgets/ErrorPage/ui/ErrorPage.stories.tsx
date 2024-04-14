import { StoryFn, Meta } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/contexts/ThemeContext";
import { ErrorPage } from "./ErrorPage";

export default {
	title: "widget/ErrorPage",
	component: ErrorPage,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as Meta<typeof ErrorPage>;

const Template: StoryFn<typeof ErrorPage> = (args) => <ErrorPage {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

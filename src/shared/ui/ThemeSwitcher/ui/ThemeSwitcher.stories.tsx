import { Meta, StoryFn } from "@storybook/react";
import { ThemeDecorator } from "../../../config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "../../../contexts/ThemeContext";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default {
	title: "shared/ThemeSwitcher",
	component: ThemeSwitcher,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as Meta<typeof ThemeSwitcher>;

const Template: StoryFn<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

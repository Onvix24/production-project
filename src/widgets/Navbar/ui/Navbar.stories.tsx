import { StoryFn, Meta } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/contexts/ThemeContext";
import { Navbar } from "./Navbar";

export default {
	title: "widget/Navbar",
	component: Navbar,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as Meta<typeof Navbar>;

const Template: StoryFn<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

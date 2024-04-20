import { Meta, StoryFn } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/contexts/ThemeContext";
import ProfilePage from "./ProfilePage";

export default {
	title: "pages/ProfilePage",
	component: ProfilePage,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as Meta<typeof ProfilePage>;

const Template: StoryFn<typeof ProfilePage> = (args) => (
	<ProfilePage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

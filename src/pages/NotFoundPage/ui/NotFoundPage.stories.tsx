import { Meta, StoryFn } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/contexts/ThemeContext";
import { NotFoundPage } from "./NotFoundPage";

export default {
	title: "pages/NotFoundPage",
	component: NotFoundPage,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as Meta<typeof NotFoundPage>;

const Template: StoryFn<typeof NotFoundPage> = (args) => (
	<NotFoundPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

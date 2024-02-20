import { Meta, StoryFn } from "@storybook/react";
import { AppLink } from "./AppLink";

export default {
	title: "shared/AppLink",
	component: AppLink,
	argTypes: {
		backgroundColor: { control: "color" },
	},
	args: {
		to: "/",
	},
} as Meta<typeof AppLink>;

const Template: StoryFn<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	children: "Text",
};
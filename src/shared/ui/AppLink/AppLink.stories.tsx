import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { AppLink, AppLinkTheme } from "./AppLink";

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
	theme: AppLinkTheme.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
	children: "Text",
	theme: AppLinkTheme.SECONDARY,
};

export const Yellow = Template.bind({});
Yellow.args = {
	children: "Text",
	theme: AppLinkTheme.YELLOW,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
	children: "Text",
	theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
	children: "Text",
	theme: AppLinkTheme.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const YellowDark = Template.bind({});
YellowDark.args = {
	children: "Text",
	theme: AppLinkTheme.YELLOW,
};
YellowDark.decorators = [ThemeDecorator(Theme.DARK)];

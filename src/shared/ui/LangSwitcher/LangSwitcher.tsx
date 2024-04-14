import React from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "../../lib/classNames/classNames";
import { Button, ButtonTheme } from "../Button/Button";

interface LangSwitcherProps {
	className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
	const { t, i18n } = useTranslation();

	const toggle = async () => {
		i18n.changeLanguage(i18n.language === "uk" ? "en" : "uk");
	};

	return (
		<Button
			className={classNames("", {}, [className])}
			theme={ButtonTheme.CLEAR}
			onClick={toggle}
		>
			{t("Мова")}
		</Button>
	);
};

import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import React from "react";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";

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

import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button/Button";
import cls from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
	className?: string;
	// short?: boolean;
}

export const LangSwitcher = memo(({ className } : LangSwitcherProps) => {
	const { t, i18n } = useTranslation();

	const toogleLanguage = () => {
		i18n.changeLanguage(i18n.language === "uk" ? "en" : "uk");
	};

	return (
		<Button
			className={classNames(cls.LangSwitcher, {}, [className])}
			onClick={toogleLanguage}
		>
			{t("Коротка назва мови")}
			{/* {t(short ? "Коротка назва мови" : "Мова")} */}
		</Button>
	);
});

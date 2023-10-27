import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string;
	short?: boolean;
}

export const LangSwitcher = ({ className, short } : LangSwitcherProps) => {

	const { t, i18n } = useTranslation();

	const toogleLanguage = () => {
		i18n.changeLanguage(i18n.language === "uk" ? "en" : "uk");
	};

	return (
		<Button
			className={classNames("", {}, [className])}
			theme={ButtonTheme.CLEAR}
			onClick={toogleLanguage}
		>
			{t(short ? "Коротка назва мови" : "Мова")}
		</Button>
	);
};


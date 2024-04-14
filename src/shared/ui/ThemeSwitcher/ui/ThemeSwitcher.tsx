import { Theme } from "../../../contexts/ThemeContext";
import { classNames } from "../../../lib/classNames/classNames";
import { useTheme } from "../../../lib/hooks/useTheme/useTheme";
import { Button, ButtonTheme } from "../../Button/Button";
import DarkIcon from "../assets/icons/theme-dark.svg";
import LightIcon from "../assets/icons/theme-light.svg";

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button
			theme={ButtonTheme.CLEAR}
			className={classNames("", {}, [className])}
			onClick={toggleTheme}
		>
			{theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
		</Button>
	);
};

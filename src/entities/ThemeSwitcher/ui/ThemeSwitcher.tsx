import React, { memo } from "react";
import ThemeIcon from "@/shared/assets/icons/themeSwither.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { Button } from "@/shared/ui/Button/Button";
import cls from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
	className?: string;
}
export const ThemeSwitcher = memo(({ className } : ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button
			// theme={ButtonTheme.CLEAR}
			className={classNames(cls.ThemeSwitcher, {}, [className])}
			onClick={toggleTheme}
		>
			<ThemeIcon className={cls.ThemeSwitcher__icon} />
			{/* { theme === Theme.DARK ? <DarkIcon/> : <LightIcon/> } */}
		</Button>

	);
});

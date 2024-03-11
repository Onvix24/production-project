import cls from "./ThemeSwitcher.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import React, { memo } from "react";
import { useTheme } from "@/app/providers/ThemeProvider";
import ThemeIcon from "@/shared/assets/icons/themeSwither.svg";
import { Button } from "@/shared/ui/Button/Button";

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
			<ThemeIcon className={cls.ThemeSwitcher__icon}/>
			{/* { theme === Theme.DARK ? <DarkIcon/> : <LightIcon/> } */}
		</Button>

	);
});



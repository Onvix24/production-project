import cls from "./Card.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { HTMLAttributes, ReactNode } from "react";

export enum CardTheme {
	NORMAL = "normal",
	OUTLINED = "outlined",
}
interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string,
    children: ReactNode,
	theme?: CardTheme;
}

export const Card = ({ className, children, theme = CardTheme.NORMAL, ...otherProps } : CardProps) => {
    
	return (
		<div className={classNames(cls.Card, {}, [className, cls[theme]])}
			{...otherProps}
		>
			{children}
		</div>
	);
};
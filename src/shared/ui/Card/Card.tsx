import cls from "./Card.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string,
    children: ReactNode,
}

export const Card = ({ className, children, ...otherProps } : CardProps) => {
    
	return (
		<div className={classNames(cls.Card, {}, [className])}
			{...otherProps}
		>
			{children}
		</div>
	);
};
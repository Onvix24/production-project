import { FC, ReactNode, memo } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "../../lib/classNames/classNames";
import cls from "./AppLink.module.scss";

interface AppLinkProps extends LinkProps {
	className?: string;
	children: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
	const {
		to,
		className,
		children,
		...otherProps
	} = props;

	return (
		<Link
			className={classNames(cls.AppLink, {}, [className])}
			to={to}
			{...otherProps}
		>
			{children}
		</Link>
	);
});

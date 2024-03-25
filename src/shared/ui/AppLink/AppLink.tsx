import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";
import { FC, ReactNode, memo } from "react";
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
					

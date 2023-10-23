import React from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {

	const { t } = useTranslation();

	return (
		<div className={classNames(cls.navbar)}>
			<div className={cls.links}>
				/
			</div>
		</div>
	);
};
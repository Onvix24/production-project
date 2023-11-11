/* eslint-disable i18next/no-literal-string */
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/Modal/Modal";
import cls from "./Navbar.module.scss";
import { LoginModal } from "features/AuthByUserName";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {

	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);

	const onToggleModal = useCallback(
		() => {
			setIsAuthModal((prevValue) => !prevValue);			
		}, []);
	
	return (
		<div className={classNames(cls.navbar)}>
			<Button 
				theme={ButtonTheme.CLEAR_INVERTED}
				className={cls.links}
				onClick={onToggleModal}
			>
				{t("Ввійти")}
			</Button>
			<LoginModal isOpen={isAuthModal} onClose={onToggleModal}/>
		</div>
	);
};
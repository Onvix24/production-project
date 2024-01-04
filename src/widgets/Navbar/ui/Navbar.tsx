/* eslint-disable i18next/no-literal-string */
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import cls from "./Navbar.module.scss";
import { LoginModal } from "features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "../../../entities/User";

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);

	const dispatch = useDispatch();
	const authData = useSelector(getUserAuthData);

	const onToggleModal = useCallback(() => {
		setIsAuthModal((prevValue) => !prevValue);
	}, []);

	const onLogout = useCallback(() => {
		dispatch(userActions.logout());
	}, [dispatch]);

	if(authData) {
		return (
			<div className={classNames(cls.navbar)}>
				<Button
					theme={ButtonTheme.CLEAR_INVERTED}
					className={cls.links}
					onClick={onLogout}
				>
					{t("Вийти")}
				</Button>
				<LoginModal isOpen={isAuthModal} onClose={onToggleModal} />
			</div>
		);
	}

	return (
		<div className={classNames(cls.navbar)}>
			<Button
				theme={ButtonTheme.CLEAR_INVERTED}
				className={cls.links}
				onClick={onToggleModal}
			>
				{t("Ввійти")}
			</Button>
			{
				isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onToggleModal} />
			}
		</div>
	);
});

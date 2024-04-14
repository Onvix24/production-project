import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { LoginModal } from "@/features/AuthByUsername";
import { getUserAuthData, userActions } from "@/entities/User";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import cls from "./Navbar.module.scss";

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

	if (authData) {
		return (
			<div className={classNames(cls.Navbar, {}, [className])}>
				{/* <AppLink to={RoutePath.article_create} className={cls.Navbar__link}>Створити статтю</AppLink> */}
				<Button
					theme={ButtonTheme.OUTLINE}
					className={cls.link}
					onClick={onLogout}
				>
					{t("Вийти")}
				</Button>
				<LoginModal isOpen={isAuthModal} onClose={onToggleModal} />
			</div>
		);
	}

	return (
		<div className={classNames(cls.Navbar)}>
			<Button
				theme={ButtonTheme.OUTLINE}
				className={cls.link}
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

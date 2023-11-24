import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import cls from "./LoginForm.module.scss";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { loginActions } from "../../model/slice/loginSlice";
import { getloginStateUsername } from "../../model/selectors/getLoginStateUsername/getLoginStateUsername";
import { getLoginStateIsLoading } from "../../model/selectors/getLoginStateIsLoading/getLoginStateIsLoading";
import { getloginStatePassword } from "../../model/selectors/getLoginStatePassword/getLoginFormPassword";
import { getloginStateError } from "../../model/selectors/getLoginStateError/getLoginFormError";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
	const { t } = useTranslation();
	const dispath = useDispatch();

	
	const username = useSelector(getloginStateUsername);
	const password = useSelector(getloginStatePassword);
	const isLoading = useSelector(getLoginStateIsLoading);
	const error = useSelector(getloginStateError);

	const onChangeUserName = useCallback((value: string) => {
		dispath(loginActions.setUserName(value));
	}, [dispath]);

	const onChangePassword = useCallback((value: string) => {
		dispath(loginActions.setPassword(value));
	}, [dispath]);

	const onLoginClick = useCallback(() => {
		//@ts-ignore
		dispath(loginByUsername({ username, password }));
	}, [dispath, password, username]);
	
	return (
		<div className={classNames(cls.LoginForm, {}, [className])}>
			<div className={cls.LoginForm__title}>{t("Форма авторизації")}</div>
			{ error && <div className={cls.LoginForm__error}>{error}</div>}
			<Input
				className={cls.LoginForm__input}
				title="Введіть ім'я користувача"
				placeholder="Ім'я"
				type="text"
				value={username}
				onChange={onChangeUserName}
			/>
			<Input
				className={cls.LoginForm__input}
				title="Введіть пароль"
				placeholder="Пароль"
				type="password"
				value={password}
				onChange={onChangePassword}
			/>
			<Button
				className={cls.LoginForm__button}
				theme={ButtonTheme.OUTLINE}
				onClick={onLoginClick}
				disabled={isLoading}
			>
				{t("Ввійти")}
			</Button>
		</div>
	);
};

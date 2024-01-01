import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import cls from "./LoginForm.module.scss";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import {
	getLoginFormUsername
} from "features/AuthByUsername/model/selectors/getLoginFormUsername/getLoginFormUsername";
import {
	getLoginFormPassword
} from "features/AuthByUsername/model/selectors/getLoginFormPassword/getLoginFormPassword";
import {
	getLoginFormIsLoading
} from "features/AuthByUsername/model/selectors/getLoginFormIsLoading/getLoginIsLoading";
import {
	getLoginFormError
} from "features/AuthByUsername/model/selectors/getLoginFormError/getLoginFormError";
import {
	DymamicModuleLoader,
	ReducersList
} from "shared/lib/components/DymamicModuleLoader/DymamicModuleLoader";

export interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducersList = {
	loginForm: loginReducer,
};

// eslint-disable-next-line react/display-name
const LoginForm = memo(({ className }: LoginFormProps) => {
	const { t } = useTranslation();
	const dispath = useDispatch();

	const username = useSelector(getLoginFormUsername);
	const password = useSelector(getLoginFormPassword);
	const isLoading = useSelector(getLoginFormIsLoading);
	const error = useSelector(getLoginFormError);

	const onChangeUserName = useCallback((value: string) => {
		dispath(loginActions.setUserName(value));
	}, [dispath]);

	const onChangePassword = useCallback((value: string) => {
		dispath(loginActions.setPassword(value));
	}, [dispath]);

	const onLoginClick = useCallback(() => {
		// @ts-ignore
		dispath(loginByUsername({ username, password }));
	}, [dispath, password, username]);



	return (
		<DymamicModuleLoader
			reducers = {initialReducers}
			removeAfterUnmount
		>
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
		</DymamicModuleLoader>

	);;
});

export default LoginForm;
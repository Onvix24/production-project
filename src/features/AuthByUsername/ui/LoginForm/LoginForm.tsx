import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import {
	DynamicModuleLoader,
	ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import {
	getLoginFormError,
} from "../../model/selectors/getLoginFormError/getLoginFormError";
import {
	getLoginFormIsLoading,
} from "../../model/selectors/getLoginFormIsLoading/getLoginFormIsLoading";
import {
	getLoginFormPassword,
} from "../../model/selectors/getLoginFormPassword/getLoginFormPassword";
import {
	getLoginFormUsername,
} from "../../model/selectors/getLoginFormUsername/getLoginFormUsername";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import cls from "./LoginForm.module.scss";

export interface LoginFormProps {
	className?: string;
	onSuccess: () => void;
}

const initialReducers: ReducersList = {
	loginForm: loginReducer,
};

const LoginForm = ({ className, onSuccess }: LoginFormProps) => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	const username = useSelector(getLoginFormUsername);
	const password = useSelector(getLoginFormPassword);
	const isLoading = useSelector(getLoginFormIsLoading);
	const error = useSelector(getLoginFormError);

	const onChangeUsername = useCallback((value: string) => {
		dispatch(loginActions.setUsername(value));
	}, [dispatch]);

	const onChangePassword = useCallback((value: string) => {
		dispatch(loginActions.setPassword(value));
	}, [dispatch]);

	const onLoginClick = useCallback(async () => {
		const result = await dispatch(loginByUsername({ username, password }));
		if (result.meta.requestStatus === "fulfilled") {
			onSuccess();
		}
	}, [dispatch, password, username, onSuccess]);

	return (
		<DynamicModuleLoader
			reducers={initialReducers}
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
					onChange={onChangeUsername}
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
		</DynamicModuleLoader>

	);
};

export default LoginForm;

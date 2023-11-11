import { Button, ButtonTheme } from "shared/ui/Button/Button";
import cls from "./LoginForm.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
	const { t } = useTranslation();

	return (
		<div className={classNames(cls.LoginForm, {}, [className])}>
			<Input
				className={cls.LoginForm__input}
				title="Введіть ім'я користувача"
				placeholder="Ім'я"
				type="text"
			/>
			<Input
				className={cls.LoginForm__input}
				title="Введіть пароль"
				placeholder="Пароль"
				type="password"
			/>
			<Button
				className={cls.LoginForm__button}
				theme={ButtonTheme.OUTLINE}
			>
				{t("Ввійти")}
			</Button>
		</div>
	);
};

import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button/Button";
import cls from "./ErrorPage.module.scss";

interface ErrorPageProps {
	className?: string;
}
export const ErrorPage = ({ className } : ErrorPageProps) => {
	const { t } = useTranslation();

	const reloadPage = () => {
		// eslint-disable-next-line no-restricted-globals
		location.reload();
	};
	return (
		<div className={classNames(cls.ErrorPage, {}, [className])}>
			<p>{t("Відбулась помилка")}</p>
			<Button onClick={reloadPage}>
				{t("Обновити сторінку")}
			</Button>
		</div>
	);
};

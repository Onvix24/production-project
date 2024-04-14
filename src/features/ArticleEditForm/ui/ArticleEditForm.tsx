import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ArticleEditForm.module.scss";

interface ArticleEditFormProps {
	className?: string
}

export const ArticleEditForm = memo(({ className } : ArticleEditFormProps) => {
	return (
		<div className={classNames(cls.ArticleEditForm, {}, [className])}>
			ArticleEditForm
			{
				// ?потрібно зробити форму для редагування статті  і постаратися зробити так щоб її можна було використовувати для створення нової статті
			}
		</div>
	);
});

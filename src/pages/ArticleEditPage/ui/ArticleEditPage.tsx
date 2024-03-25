import cls from "./ArticleEditPage.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import { useParams } from "react-router-dom";

interface ArticleEditPageProps {
	className?: string
}

const ArticleEditPage = memo(({ className } : ArticleEditPageProps) => {
	
	const  { id } = useParams<{id: string}>();
	const isEdit = Boolean(id);

	return (
		<div className={classNames(cls.ArticleEditPage, {}, [className])}>
			{
				isEdit 
					? `Редагування статті з id: ${id}`
					: "Створення нової статті"
			}
		</div>
	);
});

export default ArticleEditPage;
import { ArticleImageBlock } from "entities/Article/model/types/Article";
import cls from "./ArticleImageBlockComponent.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface ArticleImageBlockProps {
	className?: string;
	block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = ({ className, block } : ArticleImageBlockProps) => {

	return (
		<div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
			<img className={cls.ArticleImageBlockComponent__img} src={block.src} alt={block.title}/>
			{block.title && (
				<div className={cls.ArticleImageBlockComponent__title}>{block.title}</div>
			)}
		</div>
	);
};
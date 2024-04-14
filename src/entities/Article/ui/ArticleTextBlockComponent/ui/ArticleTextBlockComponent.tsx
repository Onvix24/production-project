import { classNames } from "@/shared/lib/classNames/classNames";
import { ArticleTextBlock } from "../../../model/types/Article";
import cls from "./ArticleTextBlockComponent.module.scss";

interface ArticleTextBlockProps {
	className?: string;
	block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = ({ className, block } : ArticleTextBlockProps) => {
	return (
		<div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
			{block?.title && <h3 className={cls.ArticleTextBlockComponent__title}>{block.title}</h3> }
			{block?.paragraphs && (
				<div className={cls.ArticleTextBlockComponent__paragraphs}>
					{block.paragraphs.map((paragraph) => (
						<div
							className={cls.ArticleTextBlockComponent__paragraph}
							key={paragraph}
						>
							{paragraph}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

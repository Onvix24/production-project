import cls from "./ArticleCodeBlockComponent.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ArticleCodeBlock } from "@/entities/Article/model/types/Article";
import { Button } from "@/shared/ui/Button/Button";
import CopyIcon from "@/shared/assets/icons/Article/copy.svg";
import { useCallback } from "react";

interface ArticleCodeBlockProps {
	className?: string;
	block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = ({ className, block } : ArticleCodeBlockProps) => {
	
	const onCopy = useCallback(() => {
		navigator.clipboard.writeText(block.code);
	}, [block.code]); 

	return (
		<div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
			<Button onClick={onCopy} className={cls.ArticleCodeBlockComponent__copyBtn}>
				<CopyIcon className={cls.ArticleCodeBlockComponent__copyIcon}/>
			</Button>
			<pre className={cls.ArticleCodeBlockComponent__pre}>
				<code className={cls.ArticleCodeBlockComponent__code}>
					{block?.code}
				</code>
			</pre>
		</div>
	);
};
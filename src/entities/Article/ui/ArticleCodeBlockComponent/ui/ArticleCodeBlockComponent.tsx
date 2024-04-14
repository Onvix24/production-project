import { useCallback } from "react";
import CopyIcon from "@/shared/assets/icons/Article/copy.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button/Button";
import { ArticleCodeBlock } from "../../../model/types/Article";
import cls from "./ArticleCodeBlockComponent.module.scss";

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
				<CopyIcon className={cls.ArticleCodeBlockComponent__copyIcon} />
			</Button>
			<pre className={cls.ArticleCodeBlockComponent__pre}>
				<code className={cls.ArticleCodeBlockComponent__code}>
					{block?.code}
				</code>
			</pre>
		</div>
	);
};

import { memo, ReactNode, useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Card, CardTheme } from "@/shared/ui/Card/Card";
import cls from "./ArticlesPageTabs.module.scss";

export interface ArticlesTabItem {
	value: string;
	content: ReactNode;
}

interface ArticlesTabsProps {
	className?: string;
	tabs: ArticlesTabItem[];
	value: string;
	onTabClick: (tab: ArticlesTabItem) => void;
}

export const ArticlesPageTabs = memo((props: ArticlesTabsProps) => {
	const {
		className, tabs, onTabClick, value,
	} = props;

	const clickHandle = useCallback((tab: ArticlesTabItem) => () => {
		onTabClick(tab);
	}, [onTabClick]);

	return (
		<div className={classNames(cls.ArticlesPageTabs, {}, [className])}>
			{tabs.map((tab) => (
				<Card
					theme={tab.value === value ? CardTheme.OUTLINED : CardTheme.NORMAL}
					className={cls.ArticlesPageTabs__item}
					key={tab.value}
					onClick={clickHandle(tab)}
				>
					{tab.content}
				</Card>
			))}
		</div>
	);
});

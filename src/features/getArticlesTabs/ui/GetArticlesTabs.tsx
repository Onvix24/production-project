import { ArticlesPageTabs, ArticlesTabItem } from "@/pages/ArticlesPage";
import cls from "./GetArticlesTabs.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { memo, useCallback, useMemo } from "react";
import { ArticleType } from "@/entities/Article";

interface GetArticlesTabsProps {
	className?: string;
	value: ArticleType;
	onChangeType: (type: ArticleType) => void;
}

export const GetArticlesTabs = memo(({ className, value, onChangeType } : GetArticlesTabsProps) => {

	const articlesTabs = useMemo<ArticlesTabItem[]>(() => [
		{
			value: ArticleType.ALL,
			content: "Всі статті"
		},
		{
			value: ArticleType.IT,
			content: "IT"
		},
		{
			value: ArticleType.ECONOMYCS,
			content: "Економіка"
		},
		{
			value: ArticleType.SCIENCE,
			content: "Наука"
		}
	], []);

	const onChangeTab = useCallback((tab: ArticlesTabItem) => {
		onChangeType(tab.value as ArticleType);
	}, [onChangeType]);

	return (
		<ArticlesPageTabs 
			onTabClick={onChangeTab}
			value={value}
			tabs={articlesTabs}
			className={classNames("", {}, [className])} 
			
		/>
	);

});
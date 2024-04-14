import { memo, useMemo } from "react";
import { ArticlesSortField, OrderSort } from "@/entities/Article";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Select, SelectOptions } from "@/shared/ui/Select/Select";
import cls from "./ArticleSortSelector.module.scss";

interface ArticleSortSelectorProps {
	className?: string;
	sort: ArticlesSortField;
	order: OrderSort;
	onChangeOrder: (newOrder: OrderSort) => void;
	onChangeSort: (newSort: ArticlesSortField) => void;
}

export const ArticleSortSelector = memo(({
	className, onChangeOrder, onChangeSort, order, sort,
} : ArticleSortSelectorProps) => {
	const orderOptions = useMemo<SelectOptions<OrderSort>[]>(() => [
		{ value: OrderSort.ASC, content: "Зростанням" },
		{ value: OrderSort.DESC, content: "Спаданням" },
	], []);

	const sortFieldOptions = useMemo<SelectOptions<ArticlesSortField>[]>(() => [
		{ value: ArticlesSortField.CREATEDAT, content: "Датою" },
		{ value: ArticlesSortField.TITLE, content: "Заголовком" },
		{ value: ArticlesSortField.VIEWS, content: "Переглядами" },
	], []);

	return (
		<div className={classNames(cls.ArticleSortSelector, {}, [className])}>
			<h3>Сортувати за</h3>
			<Select
				className={cls.ArticleSortSelector__select}
				options={orderOptions}
				value={order}
				onChange={onChangeOrder}
			/>
			<Select
				className={cls.ArticleSortSelector__select}
				options={sortFieldOptions}
				value={sort}
				onChange={onChangeSort}
			/>
		</div>
	);
});

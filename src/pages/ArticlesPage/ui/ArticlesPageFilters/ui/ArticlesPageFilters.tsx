import { useSelector } from "react-redux";
import { useCallback, useMemo } from "react";
import cls from "./ArticlesPageFilters.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Card } from "@/shared/ui/Card/Card";
import { Input } from "@/shared/ui/Input/Input";
import { ArticleSortSelector } from "@/features/ArticleSortSelector";
import { 
	getArticlesPageOrder, 
	getArticlesPageSearch,
	getArticlesPageSort, 
	getArticlesPageType
} from "../../../model/selectors/ArticlePageSelectors";
import { articlesPageActions } from "../../../model/slices/articlesPageSlice";
import { ArticlesSortField, OrderSort } from "../../../model/types/articlesPageSchema";
import { fetchArticlesList } from "../../../model/services/fetchArticlesList/fetchArticlesList";
import { useDebounce } from "@/shared/lib/hooks/useDebounce/useDebounce";
import { ArticlesPageTabs, ArticlesTabItem } from "../../ArticlesPageTabs/ArticlesPageTabs";
import { ArticleType } from "@/entities/Article";
import { GetArticlesTabs } from "@/features/getArticlesTabs";

interface ArticlesPageFiltersProps {
	className?: string
}

export const ArticlesPageFilters = ({ className } : ArticlesPageFiltersProps) => {
	const dispatch = useAppDispatch();
	const order = useSelector(getArticlesPageOrder);
	const sort = useSelector(getArticlesPageSort);
	const search = useSelector(getArticlesPageSearch);
	const type = useSelector(getArticlesPageType);

	const fetchData =  useCallback(() => {
		dispatch(fetchArticlesList({ replace: true }));	
	}, [dispatch]);

	const debouncedFetchData = useDebounce(fetchData, 500);
	
	const onChangeOrder = useCallback((newOrder: OrderSort) => {
		dispatch(articlesPageActions.setOrder(newOrder));
		dispatch(articlesPageActions.setPage(1));
		fetchData();
	}, [dispatch, fetchData]);

	const onChangeSort = useCallback((newSort: ArticlesSortField) => {
		dispatch(articlesPageActions.setSort(newSort));
		dispatch(articlesPageActions.setPage(1));
		fetchData();
	}, [dispatch, fetchData]);

	const onChangeSearch = useCallback((search: string) => {
		dispatch(articlesPageActions.setSearch(search));
		dispatch(articlesPageActions.setPage(1));
		debouncedFetchData();
	}, [dispatch, debouncedFetchData]);

	const onChangeTab = useCallback((value: ArticleType) => {
		dispatch(articlesPageActions.setType(value));
		dispatch(articlesPageActions.setPage(1));
		debouncedFetchData();
	}, [dispatch, debouncedFetchData]);

	return (
		<div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
			<Card className={cls.ArticlesPageFilters__search}>
				<Input onChange={onChangeSearch} value={search} placeholder="Пошук"/>
			</Card>
			<GetArticlesTabs value={type} onChangeType={onChangeTab}/>
			<ArticleSortSelector order={order} sort={sort} onChangeOrder={onChangeOrder} onChangeSort={onChangeSort}/>
		</div>
	);
};
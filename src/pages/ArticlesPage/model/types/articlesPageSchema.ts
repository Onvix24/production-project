import { EntityState } from "@reduxjs/toolkit";
import {
	Article, ArticleListView, ArticleType,
	ArticlesSortField,
	OrderSort,
} from "@/entities/Article";

export interface ArticlesPageSchema extends EntityState<Article> {
	isLoading?: boolean;
	error?: string;
	view: ArticleListView;
	page:number;
	limit: number;
	hasMore: boolean;
	_inited: boolean;
	order: OrderSort;
	sort: ArticlesSortField;
	search: string;
	type: ArticleType;
}

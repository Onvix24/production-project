import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleListView } from "@/entities/Article";
import { ArticleType } from "@/entities/Article";

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

export enum OrderSort {
    "ASC" = "asc",
    "DESC" = "desc"
} 

export enum ArticlesSortField {
    "CREATEDAT" = "createdAt",
    "VIEWS" = "views",
    "TITLE" = "title",
}


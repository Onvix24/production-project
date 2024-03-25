import { StateSchema } from "@/app/providers/StoreProvider";
import { ArticleListView, ArticleType } from "@/entities/Article";
import { ArticlesSortField, OrderSort } from "../types/articlesPageSchema";

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading;
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view || ArticleListView.GRID;
export const getArticlesPageNum = (state: StateSchema) => state.articlesPage?.page  || 1;
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit;
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;  
export const getArticlesPageInited = (state: StateSchema) => state.articlesPage?._inited;  
export const getArticlesPageSearch = (state: StateSchema) => state.articlesPage?.search ?? "";
export const getArticlesPageOrder = (state: StateSchema) => state.articlesPage?.order ?? OrderSort.ASC;
export const getArticlesPageSort = (state: StateSchema) => state.articlesPage?.sort ?? ArticlesSortField.CREATEDAT;    
export const getArticlesPageType = (state: StateSchema) => state.articlesPage?.type ?? ArticleType.ALL;    
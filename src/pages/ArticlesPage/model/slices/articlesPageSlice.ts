import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/StoreProvider";
import { Article, ArticleListView, ArticleType } from "@/entities/Article";
import { ArticlesPageSchema, ArticlesSortField, OrderSort } from "../types/articlesPageSchema";
import { fetchArticlesList } from "../services/fetchArticlesList/fetchArticlesList";
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from "@/shared/const/localStorage";

const articlesAdapter = createEntityAdapter<Article>({
	selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
	(state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
	name: "articlesPageSlice",
	initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
		isLoading: false,
		error: undefined,
		ids: [],
		entities: {},
		view: ArticleListView.GRID,
		page: 1,
		limit: 3,
		hasMore: true,
		_inited: false,
		sort: ArticlesSortField.CREATEDAT,
		order: OrderSort.ASC,	
		search: "",
		type: ArticleType.ALL,
	}),
	reducers: {
		setView: (state, action: PayloadAction<ArticleListView>) => {
			state.view = action.payload;
			localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
		},
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
		},
		initView: (state) => {
			const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleListView;
			state.view = view;
			state.limit = view === ArticleListView.COLUMN ? 4 : 9;
			state._inited = true;
		},
		setSort: (state, action: PayloadAction<ArticlesSortField>) => {
			state.sort = action.payload;
		},
		setOrder: (state, action: PayloadAction<OrderSort>) => {
			state.order = action.payload;
		},
		setSearch: (state, action: PayloadAction<string>) => {
			state.search = action.payload;
		},
		setType: (state, action: PayloadAction<ArticleType>) => {
			state.type = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticlesList.pending, (state, action) => {
				state.error = undefined;
				state.isLoading = true;

				if(action.meta.arg.replace) {
					articlesAdapter.removeAll(state);
				}	
			})
			.addCase(fetchArticlesList.fulfilled, (
				state, 
				action: PayloadAction<Article[]>
			) => {
				state.isLoading = false;
				state.hasMore = action.payload.length > 0;
			
				//@ts-ignore
				if(action.meta.arg.replace) {
					articlesAdapter.setAll(state, action.payload);
				} else {
					articlesAdapter.addMany(state, action.payload);
				}
			})
			.addCase(fetchArticlesList.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const {
	reducer: articlesPageReducer,
	actions: articlesPageActions,
} = articlesPageSlice;

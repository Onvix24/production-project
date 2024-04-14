import {
	AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { ArticleDetailsPageRecomendationsSchema } from "@/pages/ArticleDetailsPage";
import { ArticlesPageSchema } from "@/pages/ArticlesPage";
import { LoginSchema } from "@/features/AuthByUsername";
import { ArticleDetailsSchema } from "@/entities/Article";
import { counterSchema } from "@/entities/Counter";
import { ProfileSchema } from "@/entities/Profile";
import { UserSchema } from "@/entities/User";
import { rtkQueryApi } from "@/shared/api/rtkQueryApi";

export interface StateSchema {
	counter: counterSchema;
	user: UserSchema;

	// асинхронні редюсери
	loginForm?: LoginSchema;
	profile?: ProfileSchema;
	articleDetails?: ArticleDetailsSchema;
	articlesPage?: ArticlesPageSchema;
	articleDetailsPage?: ArticleDetailsPageRecomendationsSchema;
	articleDetailsRecommendations?: ArticleDetailsPageRecomendationsSchema;
	[rtkQueryApi.reducerPath]: ReturnType<typeof rtkQueryApi.reducer>
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
	add: (key: StateSchemaKey, reducer : Reducer) => void;
	remove: (key : StateSchemaKey) => void;
}

export interface ThunkExtraArguments {
	api: AxiosInstance,

}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ThunkExtraArguments;
	state: StateSchema;
}

import { counterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUsername";
import { CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";

export interface StateSchema {
    counter: counterSchema;
    user: UserSchema;

    //асинхронні редюсери
    loginForm?: LoginSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: any) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer : Reducer) => void;
    remove: (key : StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}
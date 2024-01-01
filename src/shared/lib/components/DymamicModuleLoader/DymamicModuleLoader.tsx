import { FC, ReactNode, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import { ReduxStoreWithManager } from "app/providers/StoreProvider";
import { StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";
import { Reducer } from "@reduxjs/toolkit";

export type ReducersList = {
	[name in StateSchemaKey]?: Reducer;
}

type ReducersListEntry = [StateSchemaKey, Reducer];

interface DymamicModuleLoaderProps {
	children: ReactNode;
	reducers: ReducersList;
	removeAfterUnmount?: boolean;
}

export const DymamicModuleLoader: FC<DymamicModuleLoaderProps> = (props) => {
	const { children, reducers, removeAfterUnmount } = props;
	const store = useStore() as ReduxStoreWithManager;
	const dispath = useDispatch();

	useEffect(() => {
		Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
			store.reducerManager.add(name, reducer);
			dispath({ type: `@INIT ${name} reducer` });
		});

		return () => {
			Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
				store.reducerManager.remove(name);
				dispath({ type: `@DESTROY ${name} reducer` });
			});
		};
		//eslint-disable-next-line
	}, []);

	return (
		<>
			{children}
		</>
	);
};


import { lazy } from "react";


export const ArticlesPageAsync = lazy(() => new Promise(resolve => {
	//@ts-expect-error
	setTimeout(() => resolve(import("./ArticlesPage")), 400);
}));
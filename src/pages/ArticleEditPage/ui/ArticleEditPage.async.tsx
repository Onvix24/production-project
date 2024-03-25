import { lazy } from "react";


export const ArticleEditPageAsync = lazy(() => new Promise(resolve => {
	//@ts-expect-error
	setTimeout(() => resolve(import("./ArticleEditPage")), 400);
}));
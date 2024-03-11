import { lazy } from "react";


export const ArticleDetailsPageAsync = lazy(() => new Promise(resolve => {
	//@ts-expect-error
	setTimeout(() => resolve(import("./ArticleDetailsPage")), 1500);
}));
import { lazy } from "react";


export const MainPageAsync = lazy(() => new Promise(resolve => {
	//@ts-expect-error ///
	//В реальних проектах так не робити!!! Робим тільки для курса!
	setTimeout(() => resolve(import("./MainPage")), 1500);
}));

// export const MainPageAsync = lazy(() => import('./MainPage'))
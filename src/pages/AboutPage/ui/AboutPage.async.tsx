import { lazy } from "react";

export const AboutPageAsync = lazy(() => new Promise(resolve => {
	//@ts-expect-error ///
	//В реальних проектах так не робити!!! Робим тільки для курса!
	setTimeout(() => resolve(import("./AboutPage")), 1500);
}) );

// export const AboutPageAsync = lazy(() => import('./AboutPage'))

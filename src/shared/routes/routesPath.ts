export enum AppRoutes {
	MAIN = "main",
	ABOUT = "about",
	PROFILE = "profile",
	NOT_FOUND = "not_found",
	ARTICLES = "articles",
	ARTICLE_DETAILS = "article_details",
	ARTICLE_CREATE = "article_create",
	ARTICLE_EDIT = "article_edit",
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "/",
	[AppRoutes.ABOUT]: "/about",
	[AppRoutes.PROFILE]: "/profile/", // + :id
	[AppRoutes.ARTICLES]: "/articles",
	[AppRoutes.ARTICLE_DETAILS]: "/articles/", // + :id
	[AppRoutes.ARTICLE_CREATE]: "/articles/new",
	[AppRoutes.ARTICLE_EDIT]: "/articles/:id/edit",
	[AppRoutes.NOT_FOUND]: "*",

};
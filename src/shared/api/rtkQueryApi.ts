import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { USER_LOCALSTORAGE_KEY } from "../const/localStorage";

export const rtkQueryApi = createApi({
	reducerPath: "rtkQueryApi",
	tagTypes: ["Comment"],
	baseQuery: fetchBaseQuery({
		baseUrl: __API__,
		prepareHeaders: (headers) => {
			const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || "";
			const encodedToken = encodeURIComponent(token);
			headers.set("Authorization", encodedToken);
			return headers;
		},
	}),
	endpoints: (builder) => ({
	}),
});

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Comment } from "entities/Comment";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

interface updateArticleComments {
	articleId: number | string;
	commentText: string;
	userId: string;
}

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
		}
	}),
	endpoints: (builder) => ({	
		getComments: builder.query<Comment[], number>({
			providesTags: ["Comment"],
			query: (articleId) => `comments/?articleId=${articleId}&_expand=user`,
			transformResponse: (response: Comment[]) => {
				
				console.log("Response:", response);
				return response;
			},
		}),
		updateArticleComments: builder.mutation<unknown, updateArticleComments>({
			invalidatesTags: ["Comment"],
			query: ({ articleId, commentText, userId }) => ({
				method: "POST",
				url: "comments",

				body: {
					articleId,
					userId,
					text: commentText,
				}
			})
		})
	}),
});

export const { useGetCommentsQuery, useUpdateArticleCommentsMutation } = rtkQueryApi; 
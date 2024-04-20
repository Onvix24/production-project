import { rtkQueryApi } from "@/shared/api/rtkQueryApi";
import { Comment } from "../model/types/Comment";

interface updateArticleComments {
	articleId: number | string;
	commentText: string;
	userId: string;
}

const commentApi = rtkQueryApi.injectEndpoints({
	endpoints: (build) => ({
		getComments: build.query<Comment[], number>({
			providesTags: ["Comment"],
			query: (articleId) => ({
				url: "comments",
				params: {
					articleId,
					_expand: "user",
				},
			}),
		}),
		updateArticleComments: build.mutation<unknown, updateArticleComments>({
			invalidatesTags: ["Comment"],
			query: ({ articleId, commentText, userId }) => ({
				url: "comments",
				method: "POST",
				body: {
					articleId,
					userId,
					text: commentText,
				},
			}),
		}),
	}),
});

export const { useGetCommentsQuery, useUpdateArticleCommentsMutation } = commentApi;

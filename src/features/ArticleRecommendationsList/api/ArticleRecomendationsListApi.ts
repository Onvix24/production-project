import { Article } from "@/entities/Article";
import { rtkQueryApi } from "@/shared/api/rtkQueryApi";

const recomendationsApi = rtkQueryApi.injectEndpoints({
	endpoints: (build) => ({
		getArticleRecommendationsListApi: build.query<Article[], number>({
			query: (limit) => ({
				url: "articles",
				params: {
					_limit: limit,
					_expand: "user",
				},
			}),
		}),
	}),
});

export const { useGetArticleRecommendationsListApiQuery } = recomendationsApi;

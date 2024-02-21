import { StateSchema } from "@/app/providers/StoreProvider";
import { getLoginFormUsername } from "./getLoginFormUsername";

describe("getLoginIsLoading.test", () => {
	test("should return username maksym", () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				username: "maksym",
			},
		};
		expect(getLoginFormUsername(state as StateSchema)).toEqual("maksym");
	});
	test("should work with empty state", () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getLoginFormUsername(state as StateSchema)).toEqual("");
	});
});

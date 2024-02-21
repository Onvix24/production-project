import { StateSchema } from "@/app/providers/StoreProvider";
import { getLoginFormPassword } from "./getLoginFormPassword";

describe("getLoginIsLoading.test", () => {
	test("should return value 123", () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				password: "123",
			},
		};
		expect(getLoginFormPassword(state as StateSchema)).toEqual("123");
	});
	test("should work with empty state", () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getLoginFormPassword(state as StateSchema)).toEqual("");
	});
});

import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginFormIsLoading } from "./getLoginFormIsLoading";

describe("getLoginIsLoading.test", () => {
	test("should return true", () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				isLoading: true,
			},
		};
		expect(getLoginFormIsLoading(state as StateSchema)).toEqual(true);
	});
	test("should work with empty state", () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getLoginFormIsLoading(state as StateSchema)).toEqual(false);
	});
});

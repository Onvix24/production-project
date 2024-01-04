import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginFormError } from "./getLoginFormError";

describe("getLoginError.test", () => {
	test("should return error", () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				error: "error",
			},
		};
		expect(getLoginFormError(state as StateSchema)).toEqual("error");
	});
	test("should work with empty state", () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getLoginFormError(state as StateSchema)).toEqual(undefined);
	});
});

import type { counterSchema } from "./model/types/counterSchema";
import { counterReducer } from "./model/slice/counterSlice";
import { Counter } from "./ui/Counter";

export {
	Counter,
	counterSchema,
	counterReducer,
};
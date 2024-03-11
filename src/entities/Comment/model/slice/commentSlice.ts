import { createSlice } from "@reduxjs/toolkit";
import { Comment } from "../types/Comment";


const initialState: Comment = {
	id: "",
	text: "",
	user: { id: "", username: "" },	
};

export const commentSlice = createSlice({
	name: "comment",
	initialState,
	reducers: {

	},
});

export const { actions: commentActions } = commentSlice;
export const { reducer: commentReducer } = commentSlice;
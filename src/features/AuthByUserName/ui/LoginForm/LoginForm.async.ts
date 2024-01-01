import { FC, lazy } from "react";
import { LoginFormProps } from "./LoginForm";

export const LoginFromAsync = lazy<FC<LoginFormProps>>(() => new Promise(resolve => {
	//В реальних проектах так не робити!!! Робим тільки для курса!
	setTimeout(() => resolve(import("./LoginForm")), 1500);
}) );


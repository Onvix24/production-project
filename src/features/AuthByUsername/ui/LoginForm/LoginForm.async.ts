import { FC, lazy } from "react";
import { LoginFormProps } from "./LoginForm";

export const LoginFromAsync = lazy<FC<LoginFormProps>>(() => import("./LoginForm"));

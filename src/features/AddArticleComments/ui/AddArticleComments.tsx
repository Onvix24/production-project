import cls from "./AddArticleComments.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { memo, useCallback, useState } from "react";
import { Input } from "@/shared/ui/Input/Input";
import SendIcon from "@/shared/assets/icons/Article/send.svg";
import { Button } from "@/shared/ui/Button/Button";
import { Icon } from "@/shared/ui/Icon/Icon";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import { useUpdateArticleCommentsMutation } from "@/shared/api/rtkQueryApi";
import { Skeleton } from "@/shared/ui/Skeleton";

interface AddArticleCommentsProps {
	className?: string,
	articleId?: string | number,
	isLoading: boolean,
}

export const AddArticleComments = memo(({ className, articleId, isLoading } : AddArticleCommentsProps) => {
	
	const [ commentText, setCommentText] = useState<string>("");

	const authData = useSelector(getUserAuthData);

	const [updateArticleComments, { error }] = useUpdateArticleCommentsMutation();

	const onChangeHandler = useCallback(
		(value: string) => {
			setCommentText(value);			
		}, []);

	const onSendComment = useCallback(
	  () => {
			if(authData && commentText && articleId) {
				updateArticleComments({
					commentText,
					userId: authData.id,
					articleId
				});
			}
			setCommentText("");
	  }, [articleId, authData, commentText, updateArticleComments],
	);
	
	if(isLoading) {
		return (
			<div className={classNames(cls.AddArticleComments, {}, [className])}>
				<Skeleton width={"80%"} height={30} border="12px"
					className={cls.AddArticleComments__input}
				/>
				<Skeleton width={32} height={30} border="12px"/>
			</div>
		);
	}

	return (
		<div className={classNames(cls.AddArticleComments, {}, [className])}>
			<Input 
				className={cls.AddArticleComments__input}
				placeholder="Напишіть коментарій"
				value={commentText}
				onChange={onChangeHandler}
			/>
			<Button onClick={onSendComment}>
				<Icon 
					Svg={SendIcon} 
					className={cls.AddArticleComments__icon}	
				/>
			</Button>
		</div>
	);
});
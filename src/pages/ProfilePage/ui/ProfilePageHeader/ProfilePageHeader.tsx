import cls from "./ProfilePageHeader.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from "entities/Profile";
import { useSelector } from "react-redux";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { classNames } from "shared/lib/classNames/classNames";

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader = ({ className } : ProfilePageHeaderProps) => {
    
	const dispatch = useAppDispatch();
    
	const readOnly = useSelector(getProfileReadonly);
	const data = useSelector(getProfileData);

	const onStartEditClickHandler = useCallback(() => {
		dispatch(profileActions.readonly(false));
	}, [dispatch]);
	
	const onCancelEditClickHandler = useCallback(() => {
		dispatch(profileActions.cancelEdit());
	}, [dispatch]);
	
	const onSaveEditClickHandler = useCallback(() => {
		dispatch(updateProfileData());
	}, [dispatch]);
 

	return (
		<div className={classNames(cls.ProfilePageHeader, {}, [className])}>
			<Button
				theme={ButtonTheme.OUTLINE}
				// className={cls.ProfilePageHeader__cancel}
				className={classNames(cls.ProfilePageHeader__cancel, {
					[cls.ProfilePageHeader__cancel_hidden]: readOnly
				}, [])}   
				onClick={onCancelEditClickHandler}
			>
						Відмінити
			</Button>
			{
				data?.avatar && <Avatar src={data.avatar}/>
			}
			<Button
				theme={ButtonTheme.OUTLINE}
				className={cls.ProfilePageHeader__edit}
				onClick={readOnly ? onStartEditClickHandler : onSaveEditClickHandler}
			>
				{ readOnly ? "Редагувати профіль" : "Зберігти"}
			</Button>
		</div>
	);
};
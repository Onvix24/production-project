import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
	getProfileData,
	getProfileIsLoading,
	getProfileReadonly, profileActions,
	updateProfileData,
} from "@/entities/Profile";
import { getUserAuthData } from "@/entities/User";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Skeleton } from "@/shared/ui/Skeleton";
import cls from "./ProfilePageHeader.module.scss";

interface ProfilePageHeaderProps {
	className?: string
}

export const ProfilePageHeader = ({ className } : ProfilePageHeaderProps) => {
	const dispatch = useAppDispatch();

	const { id } = useParams<{ id: string }>();
	const authData = useSelector(getUserAuthData);
	const profileData = useSelector(getProfileData);
	const canEdit = authData?.id === profileData?.id;

	const isLoading = useSelector(getProfileIsLoading);

	const readOnly = useSelector(getProfileReadonly);
	const data = useSelector(getProfileData);

	const onStartEditClickHandler = useCallback(() => {
		dispatch(profileActions.readonly(false));
	}, [dispatch]);

	const onCancelEditClickHandler = useCallback(() => {
		dispatch(profileActions.cancelEdit());
	}, [dispatch]);

	const onSaveEditClickHandler = useCallback(() => {
		if (id) {
			dispatch(updateProfileData(id));
		}
	}, [dispatch, id]);

	if (isLoading) {
		return (
			<div className={classNames(cls.ProfilePageHeader, {}, [className])}>
				<Skeleton height={30} width={200} border="12px" />
				<Skeleton height={120} width={120} border="50%" />
				<Skeleton height={30} width={200} border="12px" />
			</div>
		);
	}
	return (
		<div className={classNames(cls.ProfilePageHeader, {}, [className])}>
			{
				canEdit ? (
					<>
						<Button
							theme={ButtonTheme.OUTLINE}
							className={classNames(cls.ProfilePageHeader__cancel, {
								[cls.ProfilePageHeader__cancel_hidden]: readOnly,
							}, [])}
							onClick={onCancelEditClickHandler}
						>
							Відмінити
						</Button>
						<Avatar src={data?.avatar} />
						<Button
							theme={ButtonTheme.OUTLINE}
							className={cls.ProfilePageHeader__edit}
							onClick={readOnly ? onStartEditClickHandler : onSaveEditClickHandler}
						>
							{ readOnly ? "Редагувати профіль" : "Зберігти"}
						</Button>
					</>
				)
					: <Avatar src={data?.avatar} />
			}
		</div>
	);
};

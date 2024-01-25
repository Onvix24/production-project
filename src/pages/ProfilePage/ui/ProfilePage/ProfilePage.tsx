import { useTranslation } from "react-i18next";
import cls from "./ProfilePage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { 
	ProfileCard, fetchProfileData, getProfileData,
	getProfileError, getProfileFormData, getProfileIsLoading,
	 getProfileReadonly, profileActions, profileReducer
} from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { ProfilePageHeader } from "../ProfilePageHeader/ProfilePageHeader";
import { EditableProfileCard } from "features/EditableProfileCard";

const reducers: ReducersList = {
	profile: profileReducer
};

interface ProfilePageProps {
    className?: string
}

const ProfilePage = ({ className } : ProfilePageProps) => {
    
	const { t } = useTranslation();

	const dispatch = useAppDispatch();
	// const readOnly = useSelector(getProfileReadonly);
	// const formData = useSelector(getProfileFormData);
	// const isLoading = useSelector(getProfileIsLoading);

	useEffect(() => {
	  dispatch(fetchProfileData());
	}, [dispatch]);
	
	// const onFirstnameChange	= useCallback(
	// 	(value?: string) => {
	// 		dispatch(profileActions.updateProfile({ first: value || "" }));
	// 	},
	// 	[dispatch],
	// );

	// const onLastnameChange = useCallback(
	// 	(value?: string) => {
	// 		dispatch(profileActions.updateProfile({ lastname: value || "" }));
	// 	},
	// 	[dispatch],
	// );

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={classNames(cls.ProfilePage, {}, [className])}>
				<ProfilePageHeader/>
				{/* <ProfileCard 
					data={formData}
					isLoading={isLoading}
					readOnly={readOnly}
					onLastnameChange={onLastnameChange}
					onFirstnameChange={onFirstnameChange}
				/> */}
				<EditableProfileCard/>
			</div>
		</DynamicModuleLoader>
	);
};

export default ProfilePage;
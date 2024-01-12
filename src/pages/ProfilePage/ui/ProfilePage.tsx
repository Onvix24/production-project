import { useTranslation } from "react-i18next";
import cls from "./ProfilePage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { ProfileCard, fetchProfileData, profileReducer } from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useEffect } from "react";

const reducers: ReducersList = {
	profile: profileReducer
};

interface ProfilePageProps {
    className?: string
}

const ProfilePage = ({ className } : ProfilePageProps) => {
    
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	useEffect(() => {
	  dispatch(fetchProfileData());
	}, [dispatch]);
	
	const profileData = dispatch;

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={classNames(cls.ProfilePage, {}, [className])}>
				<ProfileCard/>
			</div>
		</DynamicModuleLoader>
	);
};

export default ProfilePage;
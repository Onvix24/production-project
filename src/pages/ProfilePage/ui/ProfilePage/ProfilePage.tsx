import { useTranslation } from "react-i18next";
import cls from "./ProfilePage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { 
	ValidateProfileError,
	fetchProfileData, getProfileValidateErrors, profileReducer
} from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ProfilePageHeader } from "../ProfilePageHeader/ProfilePageHeader";
import { EditableProfileCard } from "features/EditableProfileCard";
import { ValidationError } from "webpack";

const reducers: ReducersList = {
	profile: profileReducer
};

interface ProfilePageProps {
    className?: string
}

const ProfilePage = ({ className } : ProfilePageProps) => {
    
	const { t } = useTranslation();

	const dispatch = useAppDispatch();

	const validateErrors = useSelector(getProfileValidateErrors);

	// const validateErrorTranslate = {
	// 	[ValidateProfileError.SERVER_ERROR]: t(""),
	// 	[ValidateProfileError.INCORRECT_AGE]: t(""),
	// 	[ValidateProfileError.INCORRECT_CITY]: t(""),
	// 	[ValidateProfileError.INCORRECT_FIRST]: t(""),
	// 	[ValidateProfileError.INCORRECT_LASTNAME]: t(""),
	// 	[ValidateProfileError.INCORRECT_USER_DATA]: t(""),
	// 	[ValidateProfileError.NO_DATA]: t(""),
	// };

	useEffect(() => {
	  dispatch(fetchProfileData());
	}, [dispatch]);
	

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={classNames(cls.ProfilePage, {}, [className])}>
				<ProfilePageHeader/>
				{validateErrors?.length && validateErrors.map(error => (
					<div key={error}>{error}</div>
				))}
				<EditableProfileCard/>
			</div>
		</DynamicModuleLoader>
	);
};

export default ProfilePage;


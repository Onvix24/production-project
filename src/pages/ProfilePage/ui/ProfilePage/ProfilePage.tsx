import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { EditableProfileCard } from "@/features/EditableProfileCard";
import {
	fetchProfileData, getProfileValidateErrors, profileReducer,
} from "@/entities/Profile";
import { classNames } from "@/shared/lib/classNames/classNames";
import { DynamicModuleLoader, ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Page } from "@/shared/ui/Page/Page";
import { ProfilePageHeader } from "../ProfilePageHeader/ProfilePageHeader";
import cls from "./ProfilePage.module.scss";

const reducers: ReducersList = {
	profile: profileReducer,
};

interface ProfilePageProps {
	className?: string
}

const ProfilePage = ({ className } : ProfilePageProps) => {
	const { t } = useTranslation();

	const { id } = useParams<{ id: string }>();

	const dispatch = useAppDispatch();

	const validateErrors = useSelector(getProfileValidateErrors);

	useEffect(() => {
		if (id) {
			dispatch(fetchProfileData(id));
		}
	}, [dispatch, id]);

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<Page className={classNames(cls.ProfilePage, {}, [className])}>
				<ProfilePageHeader />
				{validateErrors?.length && validateErrors.map((error) => (
					<div key={error}>{error}</div>
				))}
				<EditableProfileCard />
			</Page>
		</DynamicModuleLoader>
	);
};

export default ProfilePage;

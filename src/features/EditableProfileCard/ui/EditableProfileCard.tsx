import { Currency } from "@/entities/Currency";
import { 
	ProfileCard, getProfileData, getProfileFormData, getProfileIsLoading, getProfileReadonly, profileActions 
} from "@/entities/Profile";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import cls from "./EditableProfileCard.module.scss";
import { Country } from "@/entities/Country";

interface EditableProfileCardProps {
    className?: string
}

export const EditableProfileCard = ({ className } : EditableProfileCardProps) => {

	const dispatch = useAppDispatch();

	const readOnly = useSelector(getProfileReadonly);
	const formData = useSelector(getProfileFormData);
	const isLoading = useSelector(getProfileIsLoading);

	const onFirstnameChange	= useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ first: value || "" }));
		},
		[dispatch],
	);

	const onLastnameChange = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ lastname: value || "" }));
		},
		[dispatch],
	);

	const onAgeChange = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ age: Number(value ) }));
		},
		[dispatch],
	);

	const onAvatarChange = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ avatar: value }));
		},
		[dispatch],
	);

	const onCurrencyChange = useCallback(
		(currency?: Currency) => {
			dispatch(profileActions.updateProfile({ currency }));
		},
		[dispatch],
	);

	const onUsernameChange = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ username: value }));
		},
		[dispatch],
	);
	
	const onCountryChange = useCallback(
		(country?: Country) => {
			dispatch(profileActions.updateProfile({ country }));
		},
		[dispatch],
	);

	const onCityChange = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ city: value }));
		},
		[dispatch],
	);
	
	return (
		<ProfileCard
			className={classNames(cls.EditableProfileCard, {}, [])}
			data={formData}
			readOnly={readOnly}
			isLoading={isLoading}
			onAgeChange={onAgeChange}
			onAvatarChange={onAvatarChange}
			onCurrencyChange={onCurrencyChange}
			onFirstnameChange={onFirstnameChange}
			onLastnameChange={onLastnameChange}
			onCountryChange={onCountryChange} 
			onCityChange={onCityChange}
			onUsernameChange={onUsernameChange}
		/>
	);
};
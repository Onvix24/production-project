import cls from "./ProfileCard.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Input } from "@/shared/ui/Input/Input";
import { Profile } from "../../model/types/profile";
import { Currency, CurrencySelect } from "@/entities/Currency";
import { Country, CountrySelect } from "@/entities/Country";
import { ProfileCardSkeleton } from "./ProfileCardSkeleton";

interface ProfileCardProps {
    className?: string;
	data?: Profile;
    isLoading?: boolean;
    error?: string;
	readOnly?: boolean;
	onFirstnameChange?: (value?: string) => void;
	onLastnameChange?: (value?: string) => void;
	onAgeChange?: (value?: string) => void;
	onAvatarChange?: (value?: string) => void;
	onCurrencyChange?: (currency: Currency) => void;
	onCountryChange?: (country: Country) => void;
	onCityChange?: (value?: string) => void;
	onUsernameChange?: (value?: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
	const {
		className,
		data,
		isLoading,
		error,
		readOnly,
		onFirstnameChange,
		onLastnameChange,
		onAgeChange,
		onAvatarChange,
		onCurrencyChange,
		onCountryChange,
		onCityChange,
		onUsernameChange,
	} = props;	

	if (isLoading) {
		return (
			<div
				className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className] )}
			>
				<ProfileCardSkeleton/>
			</div>
		);
	}

	if (error) {
		return (
			<div
				className={classNames(cls.ProfileCard, {}, [
					className,
					cls.error,
				])}
			>
				<div>Трапилася помилка</div>
			</div>
		);
	}

	return (
		<div className={classNames(cls.ProfileCard, {}, [className])}>
			<div className={cls.ProfileCard__row}>
				<div className={cls.ProfileCard__column}>
					<Input
						title="Ім'я"
						value={data?.first}
						placeholder="Ваше ім'я"
						onChange={onFirstnameChange}
						// disabled={isLoading}
						readOnly={readOnly}
					/>
					<Input
						title="Призвище"
						value={data?.lastname}
						placeholder="Ваше прізвище"
						onChange={onLastnameChange}
						// disabled={isLoading}
						readOnly={readOnly}
					/>
					<Input
						title="Вік"
						value={JSON.stringify(data?.age)}
						placeholder="Ваш вік"
						onChange={onAgeChange}
						disabled={isLoading}
						readOnly={readOnly}
					/>
					<Input
						title="Місто"
						value={data?.city}
						placeholder="Ваше місто"
						onChange={onCityChange}
						disabled={isLoading}
						readOnly={readOnly}
					/>
				</div>
				<div className={cls.ProfileCard__column}>
					<Input
						title="Ім'я користувача"
						value={data?.username}
						placeholder="Ваше ім'я користувача"
						onChange={onUsernameChange}
						disabled={isLoading}
						readOnly={readOnly}
					/>
					<Input
						title="Посилання на аватар"
						value={data?.avatar}
						placeholder="Посилання на аватар"
						onChange={onAvatarChange}
						disabled={isLoading}
						readOnly={readOnly}
					/>
					<CurrencySelect 
						onChange={onCurrencyChange}	
						value={data?.currency}
						readOnly={readOnly}
					/>
					<CountrySelect 
						onChange={onCountryChange}	
						value={data?.country}
						readOnly={readOnly}
					/>
				</div>
			</div>
			{/* <Select options={options} label="Text"/> */}
		</div>
	);
};

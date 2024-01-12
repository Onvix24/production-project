import { useTranslation } from "react-i18next";
import cls from "./ProfileCard.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useSelector } from "react-redux";
import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData";
import { getProfileiSLoading } from "entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import Avatar from "shared/assets/icons/profileAvatar.svg";


interface ProfileCardProps {
    className?: string
}

export const ProfileCard = ({ className } : ProfileCardProps) => {
    
	const { t } = useTranslation();
    
	const data = useSelector(getProfileData);
	const error = useSelector(getProfileError);
	const isLoading = useSelector(getProfileiSLoading);

	return (
		<div className={classNames(cls.ProfileCard, {}, [className])}>
			<div className={cls.ProfileCard__inner}>
				<Avatar 
					className={cls.ProfileCard__avatar}
				/>
				<Button
					theme={ButtonTheme.OUTLINE}
					className={cls.ProfileCard__edit}
				>
						Редагувати профіль
				</Button>
			</div>
			<div className={cls.ProfileCard__row}>
				<div className={cls.ProfileCard__column}>
					<Input
						title="Ім'я"
						value={data?.first}
						placeholder="Ваше ім'я"
					/>
					<Input
						title="Призвище"
						value={data?.lastname}
						placeholder="Ваше призвище"
					/>
					<Input
						title="Вік"
						value={data?.age}
						placeholder="Ваш вік"
					/>
					<Input
						title="Місто"
						value={data?.first}
						placeholder="Ваше місто"
					/>
				</div>
				<div className={cls.ProfileCard__column}>
					<Input
						title="Ім'я користувача"
						value={data?.username}
						placeholder="Ваше ім'я користувача"
					/>
					<Input
						title="Посилання на аватар"
						value={data?.avatar}
						placeholder="Посилання на аватар"
					/>
					<Input
						title="Валюта"
						value={data?.currency}
						placeholder=""
					/>
					<Input
						title="Країна"
						value={data?.country}
						placeholder=""
					/>
				</div>
			</div>
		</div>
	);
};
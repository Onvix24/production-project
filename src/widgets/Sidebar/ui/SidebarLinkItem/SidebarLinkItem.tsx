import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { SidebarItemsLinkType } from "../../model/types/sidebarLinksType";
import cls from "./SidebarLinkItem.module.scss";

interface SidebarLinkItemProps {
	item: SidebarItemsLinkType;
	collapsed: boolean;
	className?: string;
}

export const SidebarLinkItem = memo(({ item, collapsed, className }: SidebarLinkItemProps) => {
	const { t } = useTranslation();

	const isAuth = useSelector(getUserAuthData);

	if (item.authOnly && !isAuth) {
		return null;
	}

	return (
		<AppLink
			className={classNames(cls.Item, {
				[cls.Item__collapsed]: collapsed,
			}, [className])}
			to={item.path}
		>
			<item.Icon className={cls.Item__icon} />
			<span className={cls.Item__link}>{t(item.text)}</span>
		</AppLink>
	);
});

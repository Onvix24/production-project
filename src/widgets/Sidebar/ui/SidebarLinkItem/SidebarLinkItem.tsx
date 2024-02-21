import { useTranslation } from "react-i18next";
import cls from "./SidebarLinkItem.module.scss";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { SidebarItemsLinkType } from "../../model/types/sidebarLinksType";
import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";

interface SidebarLinkItemProps {
    item: SidebarItemsLinkType;
    collapsed: boolean;
}

export const SidebarLinkItem = memo(({ item, collapsed }: SidebarLinkItemProps) => {
	const { t } = useTranslation();

	const isAuth = useSelector(getUserAuthData);

	if (item.authOnly && !isAuth) {
		return null;
	}

	return (
		<AppLink
			className={classNames(cls.item, {
				[cls.collapsed]: collapsed
			})}
			to={item.path}
		>
			<item.Icon className={cls.icon} />
			<span className={cls.link}>{t(item.text)}</span>
		</AppLink>
	);
});

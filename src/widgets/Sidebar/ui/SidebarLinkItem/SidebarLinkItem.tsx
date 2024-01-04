import { useTranslation } from "react-i18next";
import cls from "./SidebarLinkItem.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { SidebarItemsLinkType } from "../../model/SidebarLinks";
import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";

interface SidebarLinkItemProps {
    item: SidebarItemsLinkType;
    collapsed: boolean;
}

export const SidebarLinkItem = memo(({ item, collapsed }: SidebarLinkItemProps) => {
	const { t } = useTranslation();

	return (
		<AppLink
			className={classNames(cls.item, {
				[cls.collapsed]: collapsed
			})}
			to={item.path}
			theme={AppLinkTheme.SECONDARY}
		>
			<item.Icon className={cls.icon} />
			<span className={cls.link}>{t(item.text)}</span>
		</AppLink>
	);
});

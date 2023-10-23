import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "features/LangSwitcher";
import { useTranslation } from "react-i18next";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import MainIcon from "shared/assets/icons/main.svg";
import AboutIcon from "shared/assets/icons/about.svg";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";

interface SidebarProps {
    className?: string;
}
export const Sidebar = ({ className } : SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);
	const { t } = useTranslation();
	const onToggle = () => {
		setCollapsed(prev => !prev);
	};

	return (
		<div
			data-testid="sidebar"
			className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
		>
			<Button
				data-testid="sidebar-toggle"
				onClick={onToggle}
				className={cls.collapsedBtn}
				theme={ButtonTheme.BACKGROUND_INVERTED}
				square
				size={ButtonSize.L}
			>
				{collapsed ? ">" : "<"}
			</Button>
			<div className={cls.items}>
				<AppLink
					className={cls.item}
					to={RoutePath.main}
					theme={AppLinkTheme.SECONDARY}
				>
					<MainIcon className={cls.icon} />
					<span className={cls.link}>
						{t("Головна")}
					</span>
				</AppLink>
				<AppLink
					className={cls.item}
					to={RoutePath.about}
					theme={AppLinkTheme.SECONDARY}
				>
					<AboutIcon className={cls.icon} />
					<span className={cls.link}>
						{t("Про сайт")}
					</span>
				</AppLink>
			</div>
			<div className={cls.switchers}>
				<ThemeSwitcher/>
				<LangSwitcher
					className={cls.lang}
					short={collapsed}
				/>
			</div>
		</div>
	);
};
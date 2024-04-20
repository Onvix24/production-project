import { memo, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { LangSwitcher } from "@/features/LangSwitcher";
import { ThemeSwitcher } from "@/entities/ThemeSwitcher";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonSize } from "@/shared/ui/Button/Button";
import { getSidebarLinks } from "../../model/selectors/getSidebarLinks/getSidebarLinks";
import { SidebarLinkItem } from "../SidebarLinkItem/SidebarLinkItem";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
	className?: string;
}
export const Sidebar = memo(({ className } : SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);
	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};

	const sidebarLinks = useSelector(getSidebarLinks);
	const linksList = useMemo(() => sidebarLinks.map((item) => (
		<SidebarLinkItem
			className={cls.Sidebar__item}
			item={item}
			key={item.path}
			collapsed={collapsed}
		/>
	)), [collapsed, sidebarLinks]);

	return (
		<div
			data-testid="sidebar"
			className={classNames(cls.Sidebar, { [cls.Sidebar__collapsed]: collapsed }, [className])}
		>
			<Button
				data-testid="sidebar-toggle"
				onClick={onToggle}
				className={cls.Sidebar__collapsedBtn}
				square
			>
				{collapsed ? ">" : "<"}
			</Button>
			<div className={cls.Sidebar__items}>
				{
					linksList
				}
			</div>
			<div className={cls.Sidebar__switchers}>
				<ThemeSwitcher />
				<LangSwitcher
					className={cls.Sidebar__lang}
					// short={collapsed}
				/>
			</div>
		</div>
	);
});

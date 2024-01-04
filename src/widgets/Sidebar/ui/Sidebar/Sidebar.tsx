import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { memo, useMemo, useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "features/LangSwitcher";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { SidebarLinks } from "../../model/SidebarLinks";
import { SidebarLinkItem } from "../SidebarLinkItem/SidebarLinkItem";

interface SidebarProps {
    className?: string;
}
export const Sidebar = memo(({ className } : SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);
	const onToggle = () => {
		setCollapsed(prev => !prev);
	};

	const linksList = useMemo(() => SidebarLinks.map((item) => (
		<SidebarLinkItem 
			item={item}
			key={item.path}
			collapsed={collapsed}
		/>
	)), [collapsed]);

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
				{
					linksList
				}
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
});
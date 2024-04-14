import { Menu } from "@headlessui/react";
import { memo, Fragment, ReactNode } from "react";
import { classNames } from "../../../lib/classNames/classNames";
import cls from "./DropDown.module.scss";

export interface DropdownItem {
	disabled?: boolean;
	content?: ReactNode;
	onClick?: () => void;
	href?: string;
}

interface DropDownProps {
	className?: string;
	items: DropdownItem[];
	trigger: ReactNode;
}

export const DropDown = memo((props : DropDownProps) => {
	const {
		className, trigger, items,
	} = props;

	return (
		<div className={classNames(cls.DropDown, {}, [className])}>
			<Menu.Button className={cls.btn}>
				{trigger}
			</Menu.Button>
			<Menu.Items className={classNames(cls.menu, {}, [])}>
				{items.map((item) => {
					const content = ({ active }: { active: boolean }) => (
						<button
							type="button"
							disabled={item.disabled}
							onClick={item.onClick}
							className={classNames(cls.item, { [cls.active]: active })}
						>
							{item.content}
						</button>
					);

					if (item.href) {
						return (
							<Menu.Item disabled={item.disabled}>
								{content}
							</Menu.Item>
						);
					}

					return (
						<Menu.Item as={Fragment} disabled={item.disabled}>
							{content}
						</Menu.Item>
					);
				})}

			</Menu.Items>
		</div>
	);
});

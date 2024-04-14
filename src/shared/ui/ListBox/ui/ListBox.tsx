import { Listbox as HListBox } from "@headlessui/react";
import { Fragment, ReactNode, useState } from "react";
import Arrow from "../../../assets/icons/arrow.svg";
import { classNames } from "../../../lib/classNames/classNames";
import { Button } from "../../Button/Button";
import cls from "./ListBox.module.scss";

export interface ListBoxItem {
	value: string;
	content: ReactNode;
	disabled?: boolean;
}

interface ListBoxProps {
	items?: ListBoxItem[];
	className?: string;
	value?: string;
	defaultValue?: string;
	onChange: (value: string) => void;
	readOnly?: boolean;
	label?: string;
}

export const ListBox = (props: ListBoxProps) => {
	const {
		className,
		items,
		value,
		defaultValue,
		onChange,
		readOnly,
		label,
	} = props;

	return (
		<div className={cls.ListBox__wrapper}>
			{label && <span style={{ textWrap: "nowrap" }}>{`${label}>`}</span>}
			<HListBox
				disabled={readOnly}
				as="div"
				className={classNames(cls.ListBox, {}, [className])}
				value={value}
				onChange={onChange}
			>
				<HListBox.Button disabled={readOnly} className={cls.ListBox__trigger}>
					<Button disabled={readOnly} className={cls.ListBox__button}>
						{value ?? defaultValue}
					</Button>
				</HListBox.Button>
				<HListBox.Options className={classNames(cls.ListBox__options, {}, [className])}>
					{items?.map((item) => (
						<HListBox.Option
							key={item.value}
							value={item.value}
							disabled={item.disabled}
							as={Fragment}
						>
							{({ active, selected }) => (
								<li
									className={classNames(
										cls.ListBox__item,
										{
											[cls.ListBox__active]: active,
											[cls.ListBox__disabled]: item.disabled,
										},
									)}
								>
									{selected}
									{item.content}
								</li>
							)}
						</HListBox.Option>
					))}
				</HListBox.Options>
			</HListBox>
		</div>
	);
};

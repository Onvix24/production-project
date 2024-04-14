import { ChangeEvent, memo, useMemo } from "react";
import { Mods, classNames } from "../../lib/classNames/classNames";
import cls from "./Select.module.scss";

export interface SelectOptions<T extends string> {
	value: T;
	content: string;
}

interface SelectProps<T extends string> {
	className?: string;
	label?: string;
	options?: SelectOptions<T>[];
	value?: T;
	onChange?: (value: T) => void;
	readOnly?: boolean;
}

export const Select = <T extends string>({
	className, label, options, onChange, value, readOnly,
} : SelectProps<T>) => {
	const mods: Mods = {};

	const optionList = useMemo(() => options?.map((opt) => (
		<option
			className={cls.Select__option}
			value={opt.value}
			key={opt.value}
		>
			{opt.content}
		</option>
	)), [options]);

	const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		onChange?.(e.target.value as T);
	};

	return (
		<div className={classNames(cls.Select, mods, [className])}>
			{ label && <span className={cls.Select__label}>{label}</span> }
			<select
				className={cls.Select__select}
				value={value}
				onChange={onChangeHandler}
				disabled={readOnly}
			>
				{optionList}
			</select>
		</div>
	);
};

import { ChangeEvent, memo, useMemo } from "react";
import cls from "./Select.module.scss";
import { Mods, classNames } from "@/shared/lib/classNames/classNames";

interface selectOptions {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: selectOptions[];
    value?: string;
    onChange?: (value: string) => void;
	readOnly?: boolean;
}

export const Select = memo(({ className, label, options, onChange, value, readOnly } : SelectProps) => {
        
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
		onChange?.(e.target.value);
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
});
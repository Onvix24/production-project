import { memo, useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ListBox } from "@/shared/ui/ListBox";
import { Select } from "@/shared/ui/Select/Select";
import { Country } from "../../model/types/country";
import cls from "./CountrySelect.module.scss";

interface CountrySelectProps {
	className?: string;
	value?: Country;
	onChange?: (value: Country) => void,
	readOnly?: boolean;
}

const options = [
	{ value: Country.COREA, content: Country.COREA },
	{ value: Country.China, content: Country.China },
	{ value: Country.INDIA, content: Country.INDIA },
	{ value: Country.JAPAN, content: Country.JAPAN },
	{ value: Country.POLAND, content: Country.POLAND },
	{ value: Country.UKRAINE, content: Country.UKRAINE },
	{ value: Country.USA, content: Country.USA },
];

export const CountrySelect = memo(({
	className, value, onChange, readOnly,
} : CountrySelectProps) => {
	const onChangeHandler = useCallback(
		(value: string) => {
			onChange?.(value as Country);
		},
		[onChange],
	);

	return (
		<ListBox
			// className={classNames(cls.CountrySelect, {}, [className])}
			onChange={onChangeHandler}
			value={value}
			defaultValue="Вкажіть країну"
			label="Вкажіть країну"
			items={options}
			readOnly={readOnly}
		/>
	);

	// return (
	// 	<Select
	// 		className={classNames(cls.CountrySelect, {}, [className])}
	// 		label="Вкажіть країну"
	// 		options={options}
	// 		value={value}
	// 		onChange={onChangeHandler}
	// 		readOnly={readOnly}
	// 	/>
	// );
});

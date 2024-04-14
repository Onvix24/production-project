import { memo, useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ListBox } from "@/shared/ui/ListBox";
import { Select } from "@/shared/ui/Select/Select";
import { Currency } from "../../model/types/currency";
import cls from "./CurrencySelect.module.scss";

interface CurrencySelectProps {
	className?: string;
	value?: Currency;
	onChange?: (value: Currency) => void,
	readOnly?: boolean;
}

const options = [
	{ value: Currency.EUR, content: Currency.EUR },
	{ value: Currency.JPY, content: Currency.JPY },
	{ value: Currency.UAH, content: Currency.UAH },
	{ value: Currency.USD, content: Currency.USD },
	{ value: Currency.YUAN, content: Currency.YUAN },
];

export const CurrencySelect = memo(({
	className, value, onChange, readOnly,
} : CurrencySelectProps) => {
	const onChangeHandler = useCallback(
		(value: string) => {
			onChange?.(value as Currency);
		},
		[onChange],
	);

	return (
		<ListBox
			className={className}
			value={value}
			defaultValue="Вкажіть валюту"
			label="Вкажіть валюту"
			items={options}
			onChange={onChangeHandler}
			readOnly={readOnly}
		/>
	);
	// return (
	//	<Select
	//		className={classNames(cls.CurrencySelect, {}, [className])}
	//		label="Вкажіть валюту"
	//		options={options}
	//		value={value}
	//		onChange={onChangeHandler}
	//		readOnly={readOnly}
	//	/>
	// );
});

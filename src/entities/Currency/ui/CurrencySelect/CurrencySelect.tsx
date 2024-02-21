import { Select } from "@/shared/ui/Select/Select";
import cls from "./CurrencySelect.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Currency } from "../../model/types/currency";
import { memo, useCallback } from "react";

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
	{ value: Currency.YUAN, content: Currency.YUAN }
];

export const CurrencySelect = memo(({ className, value, onChange, readOnly } : CurrencySelectProps) => {
        
	const onChangeHandler = useCallback(
		(value: string) => {
			onChange?.(value as Currency);
		},
		[onChange],
	);
    
	return (
		<Select 
			className={classNames(cls.CurrencySelect, {}, [className])} 
			label={"Вкажіть валюту"}
			options={options}
			value={value}
			onChange={onChangeHandler}
			readOnly={readOnly}
		/>         
	);
});

import { Select } from "@/shared/ui/Select/Select";
import cls from "./CountrySelect.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import { Country } from "../../model/types/country";      

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
	{ value: Country.USA, content: Country.USA }
];

export const CountrySelect = memo(({ className, value, onChange, readOnly } : CountrySelectProps) => {
        
	const onChangeHandler = useCallback(
		(value: string) => {
			onChange?.(value as Country);
		},
		[onChange],
	);
    
	return (
		<Select 
			className={classNames(cls.CountrySelect, {}, [className])} 
			label={"Вкажіть країну"}
			options={options}
			value={value}
			onChange={onChangeHandler}
			readOnly={readOnly}
		/>         
	);
});
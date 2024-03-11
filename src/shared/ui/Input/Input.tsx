import { ChangeEvent, InputHTMLAttributes, memo } from "react";
import cls from "./Input.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "readOnly">

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    type?: string,
	title?: string 
	placeholder?: string;
	readOnly?: boolean; 
}



export const Input = memo((props : InputProps) => {
    
	const {
		onChange,
		value,
		className,
		type = "text",
		title,
		placeholder,
		readOnly,
		...otherProps 
	} = props;


	const onChangeHandler = (e : ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);		
	};

	return (
		<div className={classNames(cls.Input, {}, [className])}>
			{title && (
				<div className={cls.Input__title}>
					{`${title}`}
				</div>
			)}
			<div
				className={cls.Input__wrapper}
			>
				<input
					className={cls.Input__field}
					type={type}
					value={value}
					onChange={onChangeHandler}
					placeholder={placeholder}
					readOnly={readOnly}
					{...otherProps}
				/>
			</div>
		</div>
	);
});
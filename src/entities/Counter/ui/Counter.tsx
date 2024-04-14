import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { counterActions } from "../model/slice/counterSlice";
import cls from "./Counter.module.scss";

interface CounterProps {
	className?: string
}

export const Counter = ({ className } : CounterProps) => {
	const dispatch = useDispatch();
	const { t } = useTranslation();

	const counterValue = useSelector(getCounterValue);

	const onIncrease = () => {
		dispatch(counterActions.increment());
	};

	const onDecrease = () => {
		dispatch(counterActions.decrement());
	};

	return (
		<div className={classNames(cls.Counter, {}, [className, "Counter"])}>
			<div
				data-testid="value-title"
				className={cls.count}
			>
				{counterValue}
			</div>
			<Button
				data-testid="increment-btn"
				className={cls.increase}
				theme={ButtonTheme.OUTLINE}
				onClick={onIncrease}
			>
				{t("increase")}
			</Button>
			<Button
				data-testid="decrement-btn"
				className={cls.decrease}
				theme={ButtonTheme.OUTLINE}
				onClick={onDecrease}
			>
				{t("decrease")}
			</Button>
		</div>
	);
};

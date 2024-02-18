import cls from "./Icon.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = ({ className, Svg } : IconProps) => {
        
	return (
		<Svg className={classNames(cls.Icon, {}, [className])}/>            
	);
};
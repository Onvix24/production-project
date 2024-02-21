import { CSSProperties, useMemo } from "react";
import cls from "./Avatar.module.scss";
import { Mods, classNames } from "@/shared/lib/classNames/classNames";

interface AvatarProps {
    className?: string
    src?: string;
    alt?: string
    size?: number;
}

export const Avatar = ({ className, alt, size, src } : AvatarProps) => {
    
	const mods: Mods = {};
    
	const styles = useMemo<CSSProperties>(
		() => ({
			width: size,
			height: size,
		}), [size]
	);

	return (
		<img 
			src={src}
			alt={alt}
			style={styles}
			className={classNames(cls.Avatar, mods, [className])} />
	);
};
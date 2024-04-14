import { CSSProperties, useMemo } from "react";
import { Mods, classNames } from "../../lib/classNames/classNames";
import cls from "./Avatar.module.scss";

interface AvatarProps {
	className?: string
	src?: string;
	alt?: string
	size?: number;
}

export const Avatar = ({
	className, alt, size, src,
} : AvatarProps) => {
	const mods: Mods = {};

	const styles = useMemo<CSSProperties>(() => ({
		width: size,
		height: size,
	}), [size]);

	return (
		<img
			src={src}
			alt={alt}
			style={styles}
			className={classNames(cls.Avatar, mods, [className])}
		/>
	);
};

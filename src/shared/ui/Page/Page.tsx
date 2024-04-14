import {
	MutableRefObject, ReactNode, memo, useRef,
} from "react";
import { classNames } from "../../lib/classNames/classNames";
import { useInfiniteScroll } from "../../lib/hooks/useInfinityScroll/useInfiniteScroll";
import cls from "./Page.module.scss";

interface PageProps {
	className?: string;
	children: ReactNode;
	onScrollEnd?: () => void;
}

// @ts-ignore
export const Page = memo(({ className, children, onScrollEnd } : PageProps) => {
	const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

	// useInfiniteScroll({
	// 	triggerRef,
	// 	wrapperRef,
	// 	callback: onScrollEnd
	// });

	return (
		<section
			ref={wrapperRef}
			className={classNames(cls.Page, {}, [className])}
		>
			{children}
			{/* <div
				className={cls.Page__triggerRef}
				ref={triggerRef}
			/> */}
		</section>
	);
});

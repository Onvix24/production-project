import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Modal.module.scss";
import React, {
	ReactNode,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";
import { Portal } from "../Portal/Portal";

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose: () => void;
}

export const Modal = (props: ModalProps) => {
	const { className, children, isOpen, onClose } = props;

	const [isClosing, setIsClosing] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout>>();

	const onCloseHandler = useCallback(() => {
		if (onClose) {
			timerRef.current = setTimeout(() => {
				onClose();
				setIsClosing(true);
			}, 300);
		}
	}, [onClose]);

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === "Escape") {
				onCloseHandler();
			}
		},
		[onCloseHandler]
	);

	useEffect(() => {
		if (isOpen === false) {
			setIsClosing(true);
		}

		if (isOpen) {
			window.addEventListener("keydown", onKeyDown);
		}
		
		return () => {
			clearTimeout(timerRef.current);
			window.removeEventListener("keydown", onKeyDown);
			setIsClosing(false);

		};
	}, [isOpen, onKeyDown]);

	const onContentClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	const mods: Record<string, boolean> = {
		[cls.Modal_opened]: isOpen,
		[cls.Modal_closed]: isClosing
	};
	
	return (
		<Portal>
			<div className={classNames(cls.Modal, mods, [className])}>
				<div className={cls.overlay} onClick={onCloseHandler}>
					<div className={cls.content} onClick={onContentClick}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
};

import { Modal } from "shared/ui/Modal/Modal";
import cls from "./LoginModal.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Suspense } from "react";
import { LoginFromAsync } from "../LoginForm/LoginForm.async";
import { Loader } from "shared/ui/Loader/Loader";

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = (props : LoginModalProps) => {
	const { 
		className, 
		onClose, 
		isOpen
	} = props;

	return (
		<Modal 
			className={classNames(cls.LoginModal, {}, [className])}
			isOpen={isOpen}
			onClose={onClose}
			lazy
		>
			<Suspense fallback={<Loader/>}>
				<LoginFromAsync onSuccess={onClose}/>
			</Suspense>
		</Modal>
	);
};
import { Modal } from "shared/ui/Modal/Modal";
import cls from "./LoginModal.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { LoginForm } from "../LoginForm/LoginForm";

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
		>
			<LoginForm/>
		</Modal>
	);
};
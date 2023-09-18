import Button from "../Button/Button";
import styles from "./SuccessMessage.module.scss";
import { FC } from "react";

interface SuccessMessageProps {
	onClose: () => void;
}

const SuccessMessage: FC<SuccessMessageProps> = ({ onClose }) => {
	return (
		<div className={styles.success_message}>
			<img
				className={styles.success_message__img}
				src="icon-success.svg"
				alt="Icon success"
			/>
			<h1 className={styles.success_message__title}>Thanks for subscribing!</h1>
			<p className={styles.success_message__text}>
				A confirmation email has been sent to <b>ash@loremcompany.com</b>. Please open it and click
				the button inside to confirm your subscription.
			</p>
			<Button onClick={onClose}>Dismiss message</Button>
		</div>
	);
};

export default SuccessMessage;

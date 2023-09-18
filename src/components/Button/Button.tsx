import styles from "./Button.module.scss";
import { FC, ReactNode } from "react";

interface ButtonProps {
	type?: "button" | "submit" | "reset";
  onClick?: () => void;
	children: ReactNode;
}

const Button: FC<ButtonProps> = ({ type, children, onClick}) => {
	return (
		<>
			<button
				className={styles.button}
				type={type}
        onClick={onClick}
			>
				{children}
			</button>
		</>
	);
};

export default Button;

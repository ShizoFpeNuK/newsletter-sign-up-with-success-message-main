import styles from "./Input.module.scss";
import { TYPES_INPUT } from "../../helpers/reqexp/types_input";
import { ChangeEventHandler, FC, HTMLInputTypeAttribute, useEffect, useState } from "react";

interface InputProps {
	onChange?: ChangeEventHandler<HTMLInputElement>;
	type?: HTMLInputTypeAttribute;
	name?: string;
	placeholder?: string;
	title?: string;
	errorText?: string;
	error: boolean;
}

const Input: FC<InputProps> = ({ onChange, type, placeholder, name, title, errorText, error }) => {
	const [isError, setIsError] = useState<boolean>(false);
	let regExp = new RegExp("");

	if (type === "email") {
		regExp = TYPES_INPUT.EMAIL;
	}

	const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		setIsError(!regExp.test(event.target.value));

		if (onChange) {
			onChange(event);
		}
	};

  useEffect(() => {
    setIsError(error);
  }, [error])

	return (
		<>
			<label
				className={styles.label__input}
				htmlFor="input__email"
			>
				<span>{title}</span>
				{isError && <span className={styles.error__message}>{errorText}</span>}
			</label>
			<input
				id="input__email"
				type={type}
				name={name}
				className={isError ? styles.error__field : undefined}
				autoComplete="on"
				placeholder={placeholder}
				onChange={handleChange}
			/>
		</>
	);
};

export default Input;

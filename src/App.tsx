import styles from "./App.module.scss";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import SuccessMessage from "./components/SuccessMessage/SuccessMessage";
import { TYPES_INPUT } from "./helpers/reqexp/types_input";
import { ChangeEventHandler, FC, FormEventHandler, useState } from "react";

const App: FC = () => {
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [values, setValues] = useState<{ email: string }>({ email: "" });
	// A crutch so that when you press a button, the input field is highlighted
	const [isError, setIsError] = useState<boolean>(false);

	const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target: { value, name } }) => {
		setValues({ ...values, [name]: value });
	};

	const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();

		if (TYPES_INPUT.EMAIL.test(values.email)) {
			setIsSuccess(true);
			setValues({ email: "" });
			setIsError(false);
		} else {
			setIsError(true);
		}
	};

	const closeMessage = () => {
		setIsSuccess(false);
	};

	return (
		<>
			{!isSuccess ? (
				<div className={styles.app}>
					<>
						<div className={styles.app__left}>
							<h1 className={styles.app__left__title}>Stay updated!</h1>

							<p className={styles.app__left__text}>
								Join 60,000+ product managers receiving monthly updates on:
							</p>

							<ul className={styles.app__left__list}>
								<li>Product discovery and building what matters</li>
								<li>Measuring to ensure updates are a success</li>
								<li>And much more!</li>
							</ul>

							<form
								className={styles.app__left__form}
								onSubmit={onSubmit}
							>
								<Input
									error={isError}
									type="email"
									name="email"
									title="Email address"
									errorText="Valid email required"
									placeholder="email@company.com"
									onChange={handleChange}
								/>
								<Button type="submit">Subscribe to monthly newsletter</Button>
							</form>
						</div>

						<div className={styles.app__right}>
							<img
              className={styles.img__desktop}
								src="illustration-sign-up-desktop.svg"
								alt="Picture"
							/>
              <img
                className={styles.img__mobile}
								src="illustration-sign-up-mobile.svg"
								alt="Picture"
							/>
						</div>
					</>
				</div>
			) : (
				<SuccessMessage onClose={closeMessage} />
			)}
		</>
	);
};

export default App;

import styles from "./App.module.scss";
import React, { FormEventHandler } from "react";

const App = () => {
	const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
	};

	return (
		<div className={styles.app}>
			<div className={styles.app__inner}>
				<h1 className={styles.app__inner__title}>Stay updated!</h1>

				<p className={styles.app__inner__text}>
					Join 60,000+ product managers receiving monthly updates on:
				</p>

				<ul className={styles.app__inner__list}>
					<li>Product discovery and building what matters</li>
					<li>Measuring to ensure updates are a success</li>
					<li>And much more!</li>
				</ul>

				<form
					className={styles.app__inner__form}
					onSubmit={onSubmit}
				>
					<label>
						Email address{" "}
						<input
							type="email"
							name="email"
							autoComplete="on"
							placeholder="email@company.com"
						/>
					</label>

					<button
						className={styles.app__inner__form__submit}
						type="submit"
					>
						Subscribe to monthly newsletter
					</button>
				</form>
			</div>

			<div>
				<img
					src="illustration-sign-up-desktop.svg"
					alt="Picture"
				/>
			</div>

			{/* <!-- Success message start --> */}
			{/* Thanks for subscribing!

      A confirmation email has been sent to ash@loremcompany.com.
      Please open it and click the button inside to confirm your subscription.

      Dismiss message */}
			{/* <!-- Success message end --> */}
		</div>
	);
};

export default App;

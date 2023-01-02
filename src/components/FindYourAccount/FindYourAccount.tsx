import styles from './FindYourAccount.module.scss';

const FindYourAccount = () => {
	return (
		<div className={styles.container}>
			<div className={styles.titleContainer}>
				<h1 className={styles.title}>Find your account</h1>
			</div>
			<p className={styles.paragraph}>Please enter your email or mobile number to search for your account</p>
			<form>
				<input type='text' placeholder='Email or mobile number' className={styles.emailInput} />
				<div className={styles.buttonContainer}>
					<input type='submit' value='Search' className={styles.searchBtn} />
					<input type='submit' value='Cancel' className={styles.cancelBtn} />
				</div>
			</form>
		</div>
	);
};

export default FindYourAccount;

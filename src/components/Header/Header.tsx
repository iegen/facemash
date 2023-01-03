import styles from './Header.module.scss';

const Header = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>facemash</h1>
			<form>
				<div className={styles.loginInputs}>
					<div>
						<input type='text' placeholder='Email or mobile number' name='username' id={styles.username} />
					</div>
					<div>
						<input type='password' placeholder='Password' name='password' id={styles.password} />
					</div>
					<input type='submit' value='Log In' className={styles.button} />
				</div>
			</form>
		</div>
	);
};

export default Header;

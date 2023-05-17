import Header from 'components/Header/Header';
import FindYourAccount from 'components/FindYourAccount/FindYourAccount';
import styles from './ForgotPasswordView.module.scss';

const ForgotPasswordView = () => {
  return (
    <div className={styles.layout}>
      <Header />
    <div className={styles.FindYourAccountLayout}>
      <FindYourAccount />
    </div>
    </div>
  )
}

export default ForgotPasswordView;
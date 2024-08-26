import styles from './Auth.module.scss';
import { Button } from '@components/button';
import { InputField } from '@components/input-field';

export const AuthPage: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.form}>
        <form>
          <InputField maxWidth label="Username" />
          <InputField maxWidth label="Password" />
          <div className={styles.actions}>
            <Button label="Sign in" variant="contained" maxWidth />
            <Button label="Create an account" variant="outlined" maxWidth />
          </div>
        </form>
      </div>
    </div>
  );
};

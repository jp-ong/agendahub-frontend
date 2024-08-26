import styles from './Auth.module.scss';
import { Button } from '@components/button';
import { InputField } from '@components/input-field';
import { Logo } from '@components/logo';

export const AuthPage: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Logo maxWidth height={24} />
        <form>
          <InputField label="Username" />
          <InputField label="Password" />
          <Button label="Sign in" variant="contained" />
        </form>
        <div className={styles.cta}>
          <small>Don't have an account yet?</small>
          <Button label="Create an account" variant="outlined" />
        </div>
      </div>
    </div>
  );
};

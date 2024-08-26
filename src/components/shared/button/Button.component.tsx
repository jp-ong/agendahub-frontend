import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';
import { createClassName } from '@utils/index';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  maxWidth?: boolean;
  variant?: 'contained' | 'outlined' | 'flat';
}

export const Button: React.FC<ButtonProps> = ({
  label,
  maxWidth,
  variant = 'flat',
  ...props
}) => {
  const classes = createClassName([
    styles.button,
    maxWidth && styles.maxWidth,
    styles[`variant-${variant}`],
  ]);
  return (
    <button {...props} className={classes}>
      <span>{label}</span>
    </button>
  );
};

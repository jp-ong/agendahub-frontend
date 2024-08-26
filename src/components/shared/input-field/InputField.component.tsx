import { InputHTMLAttributes } from 'react';
import styles from './InputField.module.scss';
import { createClassName } from '@utils/index';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  maxWidth?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  maxWidth,
  ...props
}) => {
  const classes = createClassName([styles.input, maxWidth && styles.maxWidth]);
  return (
    <label htmlFor={props.id} className={classes}>
      {label && <span>{label}</span>}
      <input {...props} />
    </label>
  );
};

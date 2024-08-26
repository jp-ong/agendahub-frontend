import { ImgHTMLAttributes } from 'react';
import LogoPrimary from '@assets/img/logo-primary.svg';
import LogoSecondary from '@assets/img/logo-secondary.svg';
import styles from './Logo.module.scss';
import { createClassName } from '@utils/index';

interface LogoProps extends ImgHTMLAttributes<HTMLImageElement> {
  variant?: 'primary' | 'secondary';
  maxWidth?: boolean;
  maxHeight?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  maxWidth,
  maxHeight,
  variant = 'primary',
  ...props
}) => {
  const classes = createClassName([
    styles.logo,
    maxWidth && styles.maxWidth,
    maxHeight && styles.maxHeight,
  ]);

  const imgSrc = variant === 'primary' ? LogoPrimary : LogoSecondary;

  return <img {...props} className={classes} src={imgSrc} />;
};

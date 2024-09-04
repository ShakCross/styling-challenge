import styles from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

type ButtonProps = {
  variant?: 'default' | 'icon';
  children: React.ReactNode;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ variant = 'default', children, disabled }) => {
  return (
    <button className={`${styles.button} ${disabled ? styles.disabled : ''}`} disabled={disabled}>
      {variant === 'icon' && <FontAwesomeIcon className={styles.icon} icon={faMagnifyingGlass} />}
      <span className={`${styles.span} ${variant === 'icon' ? styles.iconButton : ''}`}>{children}</span>
    </button>
  )
}

export default Button
import styles from './index.module.scss'

type CardProps = {
  variant?: 'default' | 'border';
  children: React.ReactNode;
  propText?: string;
};

const FirmFactCard: React.FC<CardProps> = ({ variant = 'default', children, propText }) => {
  return (
    <div className={`${styles.card} ${variant === 'border' ? styles.hoverBorder : styles.default}`}>
      {variant === 'border' ? (
        <div className={styles.container}>
          {children}
          <div className={styles.propText}>{propText}</div>
        </div>
      ) : children}
    </div>
  )
}

export default FirmFactCard
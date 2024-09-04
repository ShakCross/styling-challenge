import Button from '../Button';
import FirmFactCard from '../FirmFactCard';
import styles from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const FirmFacts: React.FC = () => {
  return (
    <div className={styles.firmFacts}>
      <div className={styles.content}>
        <div className={styles.closeContainer}>
          <FontAwesomeIcon className={styles.close} icon={faXmark} />
        </div>
        <h1 className={styles.title}>Firm Facts</h1>
        <div className={styles.hr}></div>
        <div className={styles.grid}>
          <FirmFactCard>
            <Button variant='icon'>
              This is a two line button
              that terminates with accessibility
            </Button>
          </FirmFactCard>
          <FirmFactCard>
            <Button variant='icon'>
              This is a two line button
              that terminates with accessibility
            </Button>
          </FirmFactCard>
          <FirmFactCard>
            <Button>
              This is a one line button
            </Button>
          </FirmFactCard>
          <FirmFactCard>
            <Button variant='icon'>
              This is a two line button
              that terminates with accessibility
            </Button>
          </FirmFactCard>
          <FirmFactCard variant='border' propText='initial'>
            <Button variant='icon'>
              This is a two line button
              that terminates with accessibility
            </Button>
          </FirmFactCard>
          <FirmFactCard variant='border' propText='disabled'>
            <Button disabled variant='icon'>
              This is a two line button
              that terminates with accessibility
            </Button>
          </FirmFactCard>
          <FirmFactCard variant='border' propText='hover'>
            <Button variant='icon'>
              This is a two line button
              that terminates with accessibility
            </Button>
          </FirmFactCard>
        </div>
      </div>
    </div>
  )
}

export default FirmFacts
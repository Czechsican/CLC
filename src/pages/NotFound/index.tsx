import styles from './NotFound.module.css';
import { notFound } from '../../content';

const NotFound = () => {
  return (
    <section className={styles.notFound}>
      <h1>{notFound.heading}</h1>
    </section>
  )
}

export default NotFound;
import styles from './SkillCard.module.css';
import type { SkillCardData } from '../../../types';

const SkillCard = ({title, blurb}: SkillCardData) => {
  return (
    <article className={styles.skillCard}>
      <div className={`${styles.icon}`}></div>
      <h3>{title}</h3>
      <p className='lighter-text small'>{blurb}</p>
    </article>
  );
}

export default SkillCard;
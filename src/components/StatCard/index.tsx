import styles from "./StatCard.module.css";
import type { Stat } from "../../types";

const StatCard = ({number, title}: Stat) => {
  return (
    <article className={`${styles.statCard}`}>
      <div className={styles.statNumber}>
        <p>{number}+</p>
      </div>
      <div className={styles.statName}>
        <p>{title}</p>
      </div>
    </article>
  );
};

export default StatCard;
import styles from "./TeamMemberCard.module.css";
import type { TeamMember } from "../../../types";

const TeamMemberCard = ({ imgSrc, name, position }: TeamMember) => {
  return (
    <article className={styles.TeamMemberCard}>
      <div className={styles.imageContainer}>
        <img src={imgSrc} alt={name} />
      </div>
      <p className={styles.name}>{name}</p>
      <p className={styles.position}>{position}</p>
    </article>
  );
};

export default TeamMemberCard;

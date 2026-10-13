import Button from "../Button/";
import CornerTab from "../CornerTab";
import SkillCard from "./SkillCard";
import styles from "./SkillSection.module.css";
import type { SkillsSectionProps } from "../../types";

const SkillSection = ({tab, cta, title, blurb, skillCardData}: SkillsSectionProps) => {
  return (
    <div className={styles.skillsSection}>
      <div className={styles.skillsContent}>
        <CornerTab tabText={tab} darkbg/>

        <p className={styles.title}>
          {title}
        </p>

        <p className="lighter-text small">
          {blurb}
        </p>

        <Button btnText={cta} style="dark" />
      </div>
      <div className={styles.skillCardContainer}>
        {skillCardData?.map((skill) => {
          return <SkillCard key={skill.title} {...skill} />;
        })}
      </div>
    </div>
  );
};

export default SkillSection;

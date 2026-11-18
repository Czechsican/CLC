import { useEffect, useRef, useState } from "react";
import Button from "../Button/";
import CornerTab from "../CornerTab";
import SkillCard from "./SkillCard";
import styles from "./SkillSection.module.css";
import type { SkillsSectionProps } from "../../types";

const SkillSection = ({tab, cta, title, blurb, skillCardData}: SkillsSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    let frame = 0;

    const update = () => {
      frame = 0;
      const cards = containerRef.current?.children;
      if (!mq.matches || !cards) {
        setActiveIndex(null);
        return;
      }
      // The active card is the one currently spanning the top of the viewport
      let found: number | null = null;
      for (let i = 0; i < cards.length; i++) {
        const { top, bottom } = cards[i].getBoundingClientRect();
        if (top <= 0 && bottom > 0) {
          found = i;
          break;
        }
      }
      setActiveIndex(found);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    // Capture phase: scroll events don't bubble, and the page scrolls inside #root
    window.addEventListener("scroll", onScroll, { passive: true, capture: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll, { capture: true });
      window.removeEventListener("resize", onScroll);
    };
  }, []);

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
      <div className={styles.skillCardContainer} ref={containerRef}>
        {skillCardData?.map((skill, i) => {
          return <SkillCard key={skill.title} {...skill} active={i === activeIndex} />;
        })}
      </div>
    </div>
  );
};

export default SkillSection;

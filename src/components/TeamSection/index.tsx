import { useState, useRef, type PointerEvent } from "react";
import Button from "../Button";
import CornerTab from "../CornerTab";
import styles from "./TeamSection.module.css";
import TeamMemberCard from "./TeamMemberCard";
import { teamSection, teamMembers } from "../../content";

const TeamSection = () => {
  const [active, setActive] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  // Where the pointer and the scroll position were when the drag began.
  const drag = useRef({ startX: 0, scrollLeft: 0 });

  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    // Touch and pen already scroll the rail natively; only mice need help.
    if (e.pointerType !== "mouse" || !trackRef.current) return;

    drag.current = {
      startX: e.clientX,
      scrollLeft: trackRef.current.scrollLeft,
    };
    // Keep receiving move/up events even if the cursor leaves the rail.
    e.currentTarget.setPointerCapture(e.pointerId);
    setActive(true);
  };

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!active || !trackRef.current) return;

    const distance = e.clientX - drag.current.startX;
    trackRef.current.scrollLeft = drag.current.scrollLeft - distance;
  };

  const endDrag = () => setActive(false);

  const scrollByCard = (direction: 1 | -1) => {
    const cards = trackRef.current?.querySelectorAll<HTMLElement>("article");
    if (!trackRef.current || !cards || cards.length < 2) return;

    // Distance between neighbouring cards, so the card margin is included.
    const step = cards[1].offsetLeft - cards[0].offsetLeft;
    trackRef.current.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  const activeStyle = active
    ? `${styles.window} ${styles.active}`
    : `${styles.window}`;

  return (
    <div className={`${styles.teamSectionContainer} row`}>
      <div className="col-xs-12">
        <CornerTab tabText={teamSection.tab} whiteText />
      </div>
      <div className={`${styles.teamBody} col-xs-12 col-md-6`}>
        <p className={styles.title}>
          {teamSection.title}
        </p>
      </div>
      <div className={`col-xs-12 col-md-6`}>
        <p>
          {teamSection.body}
        </p>
        <Button btnText={teamSection.cta} style="tertiary" />
      </div>

      <div
        ref={trackRef}
        className={styles.railTrack}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div id="window" className={activeStyle}>
          {teamMembers?.map((employee) => {
            return <TeamMemberCard key={employee.name} {...employee} />;
          })}
        </div>
      </div>
      <div>
        <button type="button" onClick={() => scrollByCard(-1)}>
          Left
        </button>
        <button type="button" onClick={() => scrollByCard(1)}>
          Right
        </button>
      </div>
    </div>
  );
};

export default TeamSection;

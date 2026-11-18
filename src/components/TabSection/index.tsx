import { useState } from "react";
import type { KeyboardEvent } from "react";
import Tab from "./Tab/";
import TabItem from "./TabItem/";
import { tabDomId, panelDomId } from "./tabIds";
import styles from "./TabSection.module.css";
import { tabItems } from "../../content";

const TabSection = () => {
  const [activeId, setActiveId] = useState(tabItems[0].id);

  // WAI-ARIA tabs pattern: arrows/Home/End move between tabs and activate them
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const current = tabItems.findIndex((t) => t.id === activeId);
    let next: number;
    switch (e.key) {
      case "ArrowRight":
        next = (current + 1) % tabItems.length;
        break;
      case "ArrowLeft":
        next = (current - 1 + tabItems.length) % tabItems.length;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = tabItems.length - 1;
        break;
      default:
        return;
    }
    e.preventDefault();
    const nextId = tabItems[next].id;
    setActiveId(nextId);
    document.getElementById(tabDomId(nextId))?.focus();
  };

  // Every item is always rendered. CSS decides what's visible: below 768px the
  // tab bar is hidden and all items stack; above it only the active panel shows.
  return (
    <section className={styles.tabSection}>
      <div
        className={styles.tabContainer}
        role="tablist"
        aria-label="Services"
        onKeyDown={handleKeyDown}
      >
        {tabItems.map((item) => (
          <Tab
            key={item.id}
            id={item.id}
            label={item.heading}
            active={activeId === item.id}
            setActive={setActiveId}
          />
        ))}
      </div>
      {tabItems.map((item, i) => (
        <div
          key={item.id}
          className={styles.panel}
          role="tabpanel"
          id={panelDomId(item.id)}
          aria-labelledby={tabDomId(item.id)}
          data-active={activeId === item.id}
        >
          <TabItem {...item} hideImageOnMobile={i !== 0} />
        </div>
      ))}
    </section>
  );
};

export default TabSection;

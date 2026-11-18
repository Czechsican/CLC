import { useState } from "react";
import type { KeyboardEvent } from "react";
import useMediaQuery from "../../Utils/useMediaQuery";
import Tab from "./Tab/";
import TabItem from "./TabItem/";
import styles from "./TabSection.module.css";
import { tabInfo, tabItems } from "../../content";

const mobileMax = "(max-width: 767px)";

const slug = (value: string) => value.trim().toLowerCase().replace(/\s+/g, "-");
const tabId = (value: string) => `tab-${slug(value)}`;
const panelId = (value: string) => `tabpanel-${slug(value)}`;

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("coaching");
  const isMobile = useMediaQuery(mobileMax);

  // WAI-ARIA tabs pattern: arrows/Home/End move between tabs and activate them
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const current = tabInfo.findIndex((t) => t.value === activeTab);
    let next: number;
    switch (e.key) {
      case "ArrowRight":
        next = (current + 1) % tabInfo.length;
        break;
      case "ArrowLeft":
        next = (current - 1 + tabInfo.length) % tabInfo.length;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = tabInfo.length - 1;
        break;
      default:
        return;
    }
    e.preventDefault();
    setActiveTab(tabInfo[next].value);
    document.getElementById(tabId(tabInfo[next].value))?.focus();
  };

  return (
    <section className={styles.tabSection}>
      {!isMobile && (
        <div
          className={styles.tabContainer}
          role="tablist"
          aria-label="Services"
          onKeyDown={handleKeyDown}
        >
          {tabInfo?.map((tab) => {
            return (
              <Tab
                key={tab.value}
                value={tab.value}
                id={tabId(tab.value)}
                panelId={panelId(tab.value)}
                active={activeTab === tab.value}
                setActive={setActiveTab}
              />
            );
          })}
        </div>
      )}
      {isMobile
        ? tabItems?.map((tab) => <TabItem key={tab.heading} {...tab} />)
        : tabItems
            ?.filter((tab) => tab.heading === activeTab)
            ?.map((tab) => (
              <div
                key={tab.heading}
                role="tabpanel"
                id={panelId(tab.heading)}
                aria-labelledby={tabId(tab.heading)}
              >
                <TabItem {...tab} />
              </div>
            ))}
    </section>
  );
};

export default TabSection;

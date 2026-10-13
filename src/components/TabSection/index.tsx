import { useState } from "react";
import useMediaQuery from "../../Utils/useMediaQuery";
import Tab from "./Tab/";
import TabItem from "./TabItem/";
import styles from "./TabSection.module.css";
import { tabInfo, tabItems } from "../../content";

const mobileMax = "(max-width: 767px)";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("coaching");

  const activateTab = (val: string) => {
    setActiveTab(val);
  };

  const isMobile = useMediaQuery(mobileMax);

  return (
    <section className={styles.tabSection}>
      {!isMobile && (
        <div className={styles.tabContainer}>
          {tabInfo?.map((tab) => {
            return (
              <Tab
                key={tab.value}
                value={tab.value}
                active={activeTab === tab.value}
                setActive={activateTab}
              />
            );
          })}
        </div>
      )}
      {isMobile
        ? tabItems?.map((tab) => <TabItem key={tab.heading} {...tab} />)
        : tabItems
            ?.filter((tab) => tab.heading === activeTab)
            ?.map((tab) => <TabItem key={tab.heading} {...tab} />)}
    </section>
  );
};

export default TabSection;

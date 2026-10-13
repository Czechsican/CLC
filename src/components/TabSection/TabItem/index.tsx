import Button from "../../Button/";
import useMediaQuery from '../../../Utils/useMediaQuery';
import styles from "./TabItem.module.css";
import type { TabItemData } from "../../../types";

const mobileMax = "(max-width: 767px)";

const TabItem = ({
  heading,
  blurb,
  image,
  listItems,
  ctaText,
}: TabItemData) => {

  const isMobile = (useMediaQuery(mobileMax));

  const mobileLayout = (
    <div className={styles.tab}>
      <img className={styles.tabImage} src={image} />
      <h3>{heading}</h3>
      <p>{blurb}</p>
      <ul role="list" className="checklist">
        {listItems?.map((bullets) => {
          return <li key={bullets}>{bullets}</li>;
        })}
      </ul>
      <div>
        <Button btnText={ctaText} />
      </div>
    </div>
  );

  const desktopLayout = (
    <div className={styles.tab}>
      <div className={styles.desktop}>
        <h3>{heading}</h3>
        <p>{blurb}</p>
        <ul role="list" className="checklist">
          {listItems?.map((bullets) => {
            return <li key={bullets}>{bullets}</li>;
          })}
        </ul>
        <div>
          <Button btnText={ctaText} />
        </div>
      </div>
      <div>
        <img className={styles.tabImage} src={image} />
      </div>
    </div>
  );

  return (
    <article className={styles.tabItem}>
      {isMobile ? mobileLayout : desktopLayout}
    </article>
  );
};

export default TabItem;

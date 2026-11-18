import Button from "../../Button/";
import styles from "./TabItem.module.css";
import type { TabItemData } from "../../../types";

const TabItem = ({
  heading,
  blurb,
  image,
  listItems,
  ctaText,
  hideImageOnMobile = false,
}: TabItemData & { hideImageOnMobile?: boolean }) => {
  // CSS puts the image on top on mobile (hidden if hideImageOnMobile) and in the right-hand column on desktop.
  return (
    <article className={styles.tabItem}>
      <div className={styles.layout}>
        {/* Decorative: the heading beside it says what it is. Lazy + fixed size avoids layout shift,
            and display:none images (mobile, inactive tabs) are never fetched. */}
        <img
          className={`${styles.image} ${hideImageOnMobile ? styles.hideOnMobile : ''}`}
          src={image}
          alt=""
          width={800}
          height={600}
          loading="lazy"
        />
        <div className={styles.content}>
          <h3>{heading}</h3>
          <p>{blurb}</p>
          <ul role="list" className="checklist">
            {listItems?.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          <div>
            <Button btnText={ctaText} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default TabItem;

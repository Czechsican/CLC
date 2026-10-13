import styles from "./CornerTab.module.css";
import type { CornerTabProps } from "../../types";

const CornerTab = ({
  tabText = "Corner Tab",
  marginBottom = false,
  darkbg = false,
  altColor = false,
  whiteText = false,
}: CornerTabProps) => {
  const margBot = marginBottom ? `${styles.marginBottom}` : "";
  const dark = darkbg ? `${styles.darkbg}` : "";
  const white = whiteText ? `${styles.white}` : "";
  const alternateColor = altColor ? `${styles.alt}` : "";

  return (
    <p className={`${styles.cornerTab} ${margBot} ${alternateColor} ${white} ${dark}`}>
      {tabText}
    </p>
  );
};

export default CornerTab;

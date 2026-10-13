import type { ReactElement } from "react";
import type { ButtonProps } from "../../types";
import styles from "./Button.module.css";

const ButtonLink = ({
  type = "button",
  btnText ="Button Text",
  linkVal = "/",
  style = "primary"
}: ButtonProps): ReactElement => {

  let element: ReactElement;
  let btnStyle: string;

  if (style === "secondary") {
    btnStyle = styles.secondary;
  } else if (style === 'tertiary') {
    btnStyle = styles.tertiary
  } else if (style === 'accent') {
    btnStyle = styles.accent
  } else if (style === 'dark') {
    btnStyle = styles.dark
  }
  else {
    btnStyle = styles.primary;
  }

  if (type === "link") {
    element = (
      <a className={`${styles.btn} ${btnStyle} link`} href={linkVal}>{btnText}</a>
    );
  } else {
    element = (
      <button className={`${styles.btn} ${btnStyle}`}>{btnText}</button>
    );
  }

  return (
    element
  )
};

export default ButtonLink;
import styles from "./Footer.module.css";
import { footer } from "../../content";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>{footer.text}</p>
    </footer>
  )
}

export default Footer;
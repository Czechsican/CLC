import { useState } from "react";
import logo from "../../assets/cadence-logo-white.png";
import Button from '../Button/';
import { Link } from "react-router-dom";
import useMediaQuery from "../../Utils/useMediaQuery/"
import styles from "./Header.module.css";
import { nav as navLinks, headerCta } from "../../content";

const mobileMax = "(max-width: 767px)";
const desktop = "(min-width: 992px)";

const Header = () => {
  const [openMenu, setMenuOpen] = useState(false);

  const toggleBurger = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const isMobile = useMediaQuery(mobileMax);
  const isDesktop = useMediaQuery(desktop);

  const tablet = !isMobile && !isDesktop;

  const burgerStyle = openMenu
    ? `${styles.hamburger} ${styles.open}`
    : `${styles.hamburger}`;

  const navStyle = openMenu ? `${styles.nav} ${styles.open}` : `${styles.nav}`;

  const nav = (
    <>
      <ul>
        {navLinks.map((item) => (
          <li key={item.to}>
            <Link to={item.to}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <>
      <header className={`container-fluid`}>
        <div className="row">
          <div className={`${styles.navContainer} col-12`}>
            <Link to="/">
              <img className={styles.logo} src={logo} />
            </Link>

            <nav id={styles.desktopNav} className={styles.nav}>
              {nav} <Button btnText={headerCta.label} />
            </nav>

            {
              tablet && <Button btnText={headerCta.label} />
            }

            <div className={burgerStyle} onClick={toggleBurger}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>

        <nav id={styles.mobileNav} className={navStyle}>
          {nav}
        </nav>
      </header>
    </>
  );
};

export default Header;

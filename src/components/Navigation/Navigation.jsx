import { React, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Navigation.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaComputer } from "react-icons/fa6";
import Menu from "../Menu/Menu";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(window.screen.width);
  const navigate = useNavigate();
  const handleClick = () => {
    setIsOpen(true);
  };

  const handleResize = () => {
    setWindowSize(window.screen.width);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize, "false");
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.navContainer}>
        <FaComputer
          className={styles.logo}
          size={windowSize < 1200 ? 30 : 50}
          onClick={() => {
            navigate("/");
          }}
        />
        {windowSize < 1200 ? (
          <>
            <GiHamburgerMenu
              className={styles.button}
              size={30}
              onClick={handleClick}
            />
            {isOpen ? <Menu setIsOpen={setIsOpen} isOpen={isOpen} /> : null}
          </>
        ) : (
          <nav className={styles.nav}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : styles.link
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? styles.active : styles.link
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? styles.active : styles.link
              }
            >
              Contact
            </NavLink>
          </nav>
        )}
      </div>
    </div>
  );
}

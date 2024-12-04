import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Menu({ setIsOpen, isOpen }) {
  const [animateOut, setAnimateOut] = useState(false);

  const toggleMenu = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setAnimateOut(false);
      setIsOpen(false);
    }, 250);
  };
  return (
    <div
      className={`${styles.modalContainer} ${
        isOpen && !animateOut ? styles.slideIn : styles.modalOut
      }`}
    >
      <GiHamburgerMenu
        size={30}
        className={styles.button}
        onClick={toggleMenu}
      />
      <nav className={styles.nav}>
        <hr className={styles.line}></hr>
        <NavLink
          to="/portofolio"
          className={({ isActive }) => (isActive ? styles.active : "")}
          onClick={() => toggleMenu()}
        >
          Home
        </NavLink>
        <hr className={styles.line}></hr>

        <NavLink
          to="/Contact"
          className={({ isActive }) => (isActive ? styles.active : "")}
          onClick={() => toggleMenu()}
        >
          Contact
        </NavLink>
        <hr className={styles.line}></hr>
      </nav>
    </div>
  );
}

import React from "react";
import styles from "./Main.module.css";
import { PiHandWaving } from "react-icons/pi";

export default function Main() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainGroup}>
        <h1 className={styles.introMessage1}>
          Hi! <PiHandWaving />
        </h1>
        <h1 className={styles.introMessage2}>My name is</h1>
        <h1 className={styles.introMessage}>Ciobancă Andrei Sorin</h1>
        <h3 className={styles.description}>
          and I'm Junior Software Developer
        </h3>
      </div>
    </div>
  );
}

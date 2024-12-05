import React from "react";
import styles from "./AboutMe.module.css";
import Technologies from "../Technologies/Technologies";

export default function AboutMe() {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <p className={styles.descriptionText}>
          <em>
            My name is Andrei Sorin and i'm a Computer Science student in
            Bucharest, Romania.
          </em>
        </p>
      </div>
      <Technologies />
    </div>
  );
}

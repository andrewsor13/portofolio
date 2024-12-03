import React from "react";
import styles from "./ProjectsList.module.css";
import AnimatedList from "./AnimatedList/AnimatedList";

export default function ProjectsList() {
  return (
    <div className={styles.container}>
      <svg
        className={styles.svgCurveUp}
        viewBox="0 0 1440 79"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M-100 79C-100 79 218.416 23.165 693.5 23.165C1168.58 23.165 1487 79 1487 79V0H-100V79Z"></path>
      </svg>
      <AnimatedList />
      <svg
        className={styles.svgCurveDown}
        viewBox="0 0 1440 79"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M-100 79C-100 79 218.416 23.165 693.5 23.165C1168.58 23.165 1487 79 1487 79V0H-100V79Z"></path>
      </svg>
    </div>
  );
}

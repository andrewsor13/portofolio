import React, { useEffect, useState } from "react";
import styles from "./Technologies.module.css";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function Technologies() {
  const [windowSize, setWindowSize] = useState(window.screen.width);

  const handleResize = () => {
    setWindowSize(window.screen.width);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Technologies</h2>
      <hr></hr>
      <div className={styles.blockContainer}>
        <ul className={styles.leftBlock}>
          <li className={styles.blockItem}>
            <FaRegCircleCheck
              size={
                windowSize < 700
                  ? 16
                  : windowSize >= 700 && windowSize < 1000
                  ? 20
                  : 30
              }
            />
            <h3>Javascript</h3>
          </li>
          <li className={styles.blockItem}>
            <FaRegCircleCheck
              size={
                windowSize < 700
                  ? 16
                  : windowSize >= 700 && windowSize < 1000
                  ? 20
                  : 30
              }
            />
            <h3>ReactJS</h3>
          </li>
          <li className={styles.blockItem}>
            <FaRegCircleCheck
              size={
                windowSize < 700
                  ? 16
                  : windowSize >= 700 && windowSize < 1000
                  ? 20
                  : 30
              }
            />
            <h3>NodeJS</h3>
          </li>
          <li className={styles.blockItem}>
            <FaRegCircleCheck
              size={
                windowSize < 700
                  ? 16
                  : windowSize >= 700 && windowSize < 1000
                  ? 20
                  : 30
              }
            />
            <h3>HTML</h3>
          </li>
          <li className={styles.blockItem}>
            <FaRegCircleCheck
              size={
                windowSize < 700
                  ? 16
                  : windowSize >= 700 && windowSize < 1000
                  ? 20
                  : 30
              }
            />
            <h3>CSS</h3>
          </li>
          <li className={styles.blockItem}>
            <FaRegCircleCheck
              size={
                windowSize < 700
                  ? 16
                  : windowSize >= 700 && windowSize < 1000
                  ? 20
                  : 30
              }
            />
            <h3>Git</h3>
          </li>
        </ul>
        <ul className={styles.rightBlock}>
          <li className={styles.blockItem}>
            <FaRegCircleCheck
              size={
                windowSize < 700
                  ? 16
                  : windowSize >= 700 && windowSize < 1000
                  ? 20
                  : 30
              }
            />
            <h3>MongoDB</h3>
          </li>
          <li className={styles.blockItem}>
            <FaRegCircleCheck
              size={
                windowSize < 700
                  ? 16
                  : windowSize >= 700 && windowSize < 1000
                  ? 20
                  : 30
              }
            />
            <h3>REST API</h3>
          </li>
          <li className={styles.blockItem}>
            <FaRegCircleCheck
              size={
                windowSize < 700
                  ? 16
                  : windowSize >= 700 && windowSize < 1000
                  ? 20
                  : 30
              }
            />
            <h3>REDUX</h3>
          </li>
          <li className={styles.blockItem}>
            <FaRegCircleCheck
              size={
                windowSize < 700
                  ? 16
                  : windowSize >= 700 && windowSize < 1000
                  ? 20
                  : 30
              }
            />
            <h3>MySQL</h3>
          </li>
          <li className={styles.blockItem}>
            <FaRegCircleCheck
              size={
                windowSize < 700
                  ? 16
                  : windowSize >= 700 && windowSize < 1000
                  ? 20
                  : 30
              }
            />
            <h3>SASS</h3>
          </li>
          <li className={styles.blockItem}>
            <FaRegCircleCheck
              size={
                windowSize < 700
                  ? 16
                  : windowSize >= 700 && windowSize < 1000
                  ? 20
                  : 30
              }
            />
            <h3>Firestore</h3>
          </li>
        </ul>
      </div>
    </div>
  );
}

import React, { useEffect, useRef, useState } from "react";
import data from "../../../db/db";
import styles from "./AnimatedList.module.css";

export default function AnimatedList() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log("Intersection entry:", entry);
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isVisible]);
  return (
    <ul
      className={`${styles.projectsList} ${isVisible ? styles.animation : ""}`}
      ref={ref}
    >
      {data?.map((project, key) => {
        return (
          <li key={key} className={styles.projectItem}>
            <div className={styles.imageContainer}>
              <a href={project.livePage} target="_blank" rel="noreferrer">
                <img
                  src={project.images[0]}
                  alt="Website image."
                  className={styles.image}
                />
              </a>
            </div>
            <div className={styles.projectDescription}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
            <div className={styles.projectSourceCodeContainer}>
              <a
                className={styles.projectSourceCode}
                href={project.sourceCode}
                target="_blank"
                rel="noreferrer"
              >
                Source Code
              </a>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

import React from "react";
import styles from "./Contact.module.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Contact() {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <MdOutlineMailOutline className={styles.svg} />
        <a className={styles.link} href="mailto:ciobanca.andreisorin@gmail.com">
          ciobanca.andreisorin@gmail.com
        </a>
      </li>
      <li className={styles.listItem}>
        <FaLinkedin className={styles.svg} />
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/andrei-ciobanca-7796ba1a0"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </li>
      <li className={styles.listItem}>
        <FaGithubSquare className={styles.svg} />
        <a
          className={styles.link}
          href="https://github.com/andrewsor13"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </li>
    </ul>
  );
}

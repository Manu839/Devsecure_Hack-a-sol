import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>
          Copyright © 2024 Devsecure. Designed for  {"Hack-a-sol"}
          <a href="//"></a>
        </p>
      </div>
      <div className={styles.handles}>
        <a href="/#">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="//">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="//">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
};

export default Footer;

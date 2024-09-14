import React from "react";
import styles from "./Header.module.css";
import chatbotBanner from "../../assets/chatbotbanner.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          "Secure your entire development lifecycle"
        </p>
        <p className={styles.subHeading}>
        DEVSECURE provides robust support for popular programming languages and effortlessly integrates with your development tools, pipelines, and workflows for enhanced security and efficiency.

        </p>
        <Link to="/chatbox">
          <button className={styles.btn}>Get Started</button>
        </Link>
      </div>
      <div className={styles.right}>
        <img src={chatbotBanner} alt="AI" />
      </div>
    </div>
  );
};

export default Header;

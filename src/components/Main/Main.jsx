import React from "react";
import styles from "./Main.module.css";
import ChatBotCardImg from "../../assets/Chat-bot-bro.svg";
import ResponsiveImg from "../../assets/responsive.svg";
import ConversationalImg from "../../assets/conversational.jpg";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h3>Features</h3>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={ConversationalImg} alt="ConversationalImg" />
          </div>
          <div className={styles.text}>
            <h1 className={styles.cardTitle}>AI Powered</h1>
            <p>
            Code Security Analysis: Identify vulnerabilities in user-provided code and offer tailored security recommendations.
Real-Time Suggestions: Instantly improve code safety with actionable, real-time feedback.
Multi-Language Support: Works across various programming languages, enhancing versatility.
User-Friendly Interface: Simple, intuitive design for easy submission and secure code improvements.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={ChatBotCardImg} alt="ChatBotCardImg" />
          </div>
          <div className={styles.text}>
            <h1 className={styles.cardTitle}>Conversational ChatBot</h1>
            <p>
            DevSecure is an AI-powered chatbot built for dynamic, interactive conversations. With advanced natural language understanding and generation, it can answer user questions, engage in thoughtful discussions, and deliver useful information. It also offers consistent responses with minimal unpredictability, ensuring a smooth conversational experience.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={ResponsiveImg} alt="ResponsiveImg" />
          </div>
          <div className={styles.text}>
            <h1 className={styles.cardTitle}>Responsive & Clean UI</h1>
            <p>
              Devsecure is also accompanied by a clean and responsive user
              interface(UI). The UI is designed to provide a seamless and
              intuitive user experience, allowing users to interact with the
              chatbot effortlessly. The responsive nature of the UI ensures that
              the chatbot adapts well to different screen sizes and devices,
              providing a consistent experience across platforms.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.explore}>
        <Link to="/chatbox">
          <button className={styles.btn}>Explore Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Main;

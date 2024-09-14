import React, { createContext, useContext, useRef, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const lastMsg = useRef(null); // Initialize as null
  const [messageText, setMessageText] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "ai",
      text: "Hi there! I'm your code security assistant. Please provide the code you'd like me to review, and I'll analyze it to suggest ways to make it more secure and safe.",
    },
  ]);
  const [processing, setProcessing] = useState(false);

  function escapeHtml(text) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
  }

  const handleSubmission = async () => {
    if (typeof messageText === 'string' && messageText.trim() && !processing) {
      // Add human message to the conversation
      const tempMessages = [
        ...messages,
        {
          from: "human",
          text: messageText ,
        },
      ];

      setMessages(tempMessages);
      setMessageText("");

      // Scroll to the latest message
      setTimeout(() => {
        if (lastMsg.current) {
          lastMsg.current.scrollIntoView({
            behavior: "smooth",
          });
        }
      });

      try {
        setProcessing(true);
        // Send the user prompt to the backend
        const res = await fetch("http://127.0.0.1:5000/chatbox", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: messageText,  // Send the user input as 'prompt'
          }),
        });
        
        const data = await res.json();  // Receive the response
        console.log(data);
        setProcessing(false);

        // Extract the AI response
        const aiResponse = data.response || ""; // Default to empty string if response is undefined
        console.log(aiResponse);

        // Add AI response to the conversation
        setMessages((prev) => [
          ...prev,
          {
            from: "ai",
            text: aiResponse.trim(),
          },
        ]);
      } catch (err) {
        const error = "Error processing the message. Please try again later.";
        setMessages((prev) => [
          ...prev,
          {
            from: "ai",
            text: error,
          },
        ]);
      }

      setTimeout(() => {
        if (lastMsg.current) {
          lastMsg.current.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        lastMsg,
        messageText,
        setMessageText,
        processing,
        setProcessing,
        messages,
        setMessages,
        handleSubmission,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useGlobalContext = () => {
  return useContext(AppContext);
};

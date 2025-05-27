import React, { useState } from "react";
import "./style.css";

function ToggleBackground() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  const backgroundColor = isDarkMode ? "#1b1b1b" : "white";
  const textColor = isDarkMode ? "#ffa31a" : "#1b1b1b";
  const buttonBg = isDarkMode ? "white" : "#1b1b1b";

  return (
    <div style={{ backgroundColor, color: textColor, minHeight: "100vh" }}>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: buttonBg,
          color: textColor,
          border: `2px solid ${textColor}`,
          padding: "10px 20px",
          cursor: "pointer",
          margin: "20px",
        }}
      >
        {isDarkMode ? "Switch to Light Theme" : "Switch to Dark Theme"}
      </button>

      <section className="content">
        <h1>
          Welcome To A <br />
          Real World....
        </h1>
      </section>
    </div>
  );
}

export default ToggleBackground;

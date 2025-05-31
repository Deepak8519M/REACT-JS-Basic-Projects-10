import React from "react";
import "./style.css";
import { FaSearch } from "react-icons/fa";

import { useState } from "react";
function HiddenSearchBar() {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  const handleClick = (e) => {
    setBgColor("#1a1a1a");

    if (e.target.className === "container") {
      setShowInput(false);
      setBgColor("white");
    }
  };

  // const handleClick = (e) => {
  //   setBgColor("#1a1a1a");

  //   if (e.target.className === "container") {
  //     setTimeout(() => {
  //       setShowInput(false);
  //       setBgColor("white");
  //     }, 300); // delay so we see dark color briefly
  //   }
  // };

  return (
    <section
      className="container"
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
    >
      {showInput ? (
        <input type="text" placeholder="Search..." />
      ) : (
        <FaSearch onClick={() => setShowInput(true)} />
      )}
    </section>
  );
}

export default HiddenSearchBar;

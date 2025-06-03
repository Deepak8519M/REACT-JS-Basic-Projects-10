import React from "react";
import Accordian from "./Accordian";
import { accordionData } from "./utils/content";

function App() {
  return (
    <div>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordian title={title} content={content} />
        ))}
      </div>
    </div>
  );
}

export default App;

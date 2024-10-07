import { useState } from "react";
import TechnologiesContainer from "./TechnologiesContainer";

export default function Technologies() {
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="tech-container">
      <label htmlFor="technologies">Technologies:</label>
      <input
        type="text"
        name="technologies"
        id="technologies"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            setTechnologies((prevTechnology) => [
              ...prevTechnology,
              e.target.value,
            ]);
            setInputValue("");
          }
        }}
      />
      {technologies && <TechnologiesContainer technologies={technologies} />}
    </div>
  );
}

import { useState } from "react";
import Technologies from "./Technologies";

type Props = {
  dataOnChange: (technologies: string[]) => void;
  placeholder: string;
};

export default function TechnologyForm({ dataOnChange, placeholder }: Props) {
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="tech-container">
      <label htmlFor="technologies">Technologies:</label>
      <input
        type="text"
        name="technologies"
        id="technologies"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            setTechnologies((prevTechnology) => [
              ...prevTechnology,
              e.target.value,
            ]);
            dataOnChange([...technologies, inputValue]);
            setInputValue("");
          }
        }}
      />
      <Technologies technologies={technologies} />
    </div>
  );
}

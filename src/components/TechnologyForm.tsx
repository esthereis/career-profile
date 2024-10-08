import { useState } from "react";
import Technologies from "./Technologies";

type Props = {
  OnChange: (technologies: string[]) => void;
  placeholder: string;
};

export default function TechnologyForm({ OnChange, placeholder }: Props) {
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="tech-form">
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
            OnChange([...technologies, inputValue]);
            setInputValue("");
          }
        }}
      />
      <Technologies technologies={technologies} />
    </div>
  );
}

import Technologies from "../common/Technologies";
import "../../styles/technology.css";
import Input from "../common/Input";
import { useState } from "react";

type Props = {
  placeholder: string;
  onChange: (technologies: string[]) => void;
};

export default function TechnologyForm({ placeholder, onChange }: Props) {
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className="tech-form">
      <Input
        label="Technologies:"
        name="technologies"
        id="technologies"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const newValue = [...technologies, inputValue];
            setTechnologies(newValue);
            onChange(newValue);
            setInputValue("");
          }
        }}
      />
      <Technologies technologies={technologies} className={"tech-list"} />
    </div>
  );
}

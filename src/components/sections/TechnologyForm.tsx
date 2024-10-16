import { useState } from "react";
import Technologies from "../common/Technologies";
import "../../styles/technology.css";
import Input from "../common/Input";

type Props = {
  onChange: (technologies: string[]) => void;
  placeholder: string;
};

export default function TechnologyForm({ onChange, placeholder }: Props) {
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="tech-form">
      <Input
        label="Technologies:"
        name="technologies"
        id="technologies"
        placeholder={placeholder}
        value={inputValue}
        onChange={(value) => setInputValue(value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setTechnologies((prevTechnology) => [
              ...prevTechnology,
              inputValue,
            ]);
            onChange([...technologies, inputValue]);
            setInputValue("");
          }
        }}
      />
      <Technologies technologies={technologies} className={"tech-list"} />
    </div>
  );
}

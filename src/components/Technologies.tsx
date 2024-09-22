import { useState } from "react";

export default function Technologies() {
  const [technologies, setTechnologies] = useState<string[]>([]);
  return (
    <div>
      <label htmlFor="technologies">Technologies:</label>
      <input
        type="text"
        name="technologies"
        id="technologies"
        onChange={(e) =>
          setTechnologies((prevTechnology) => [
            ...prevTechnology,
            e.target.value,
          ])
        }
      />
    </div>
  );
}

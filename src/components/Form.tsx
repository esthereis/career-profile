import { useState } from "react";
import { DataType } from "../SideProfile";
import Input from "./Input";
import TechnologyForm from "./TechnologyForm";
import "../styles/form.css";

type Props = {
  save: (data: DataType) => void;
};

export default function Form({ save }: Props) {
  const [data, setData] = useState<DataType>({
    fullName: "",
    position: "",
    city: "",
    linkedIn: "",
    email: "",
    github: "",
    technologies: [],
  });

  return (
    <div className="form-container">
      <form className="form">
        <Input
          label="Complete Name: *"
          name="name"
          id="name"
          value={data.fullName}
          OnChange={(value) => {
            setData({ ...data, fullName: value });
          }}
        />

        <Input
          label="Position:*"
          name="position"
          id="position"
          value={data.position}
          OnChange={(value) => setData({ ...data, position: value })}
        />

        <Input
          label="City:"
          name="city"
          id="city"
          value={data.city}
          OnChange={(value) => setData({ ...data, city: value })}
        />

        <Input
          label="LinkedIn:"
          name="linkedIn"
          id="linkedIn"
          placeholder="Profile link (e.g., linkedin.com/in/example)"
          value={data.linkedIn}
          OnChange={(value) => setData({ ...data, linkedIn: value })}
        />

        <Input
          label="Github:"
          name="github"
          id="github"
          placeholder="Profile link (e.g., github.com/example)"
          value={data.github}
          OnChange={(value) => setData({ ...data, github: value })}
        />

        <Input
          label="Email:"
          name="email"
          id="email"
          placeholder="yourname@example.com"
          value={data.email}
          OnChange={(value) => {
            setData({ ...data, email: value });
            console.log(data);
          }}
        />

        <TechnologyForm
          placeholder="Type a technology and press Enter."
          OnChange={(techs) => setData({ ...data, technologies: techs })}
        />

        <button
          onClick={() => {
            save(data);
          }}
        >
          Save
        </button>
      </form>
    </div>
  );
}

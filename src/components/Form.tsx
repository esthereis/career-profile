import { useState } from "react";
import { DataType } from "../SideProfile";
import Input from "./Input";
import TechnologyForm from "./TechnologyForm";

type Props = {
  save: (data: DataType) => void;
};

export default function Form({ save }: Props) {
  const [data, setData] = useState<DataType>({
    src: "",
    fullName: "",
    position: "",
    city: "",
    linkedIn: "",
    email: "",
    github: "",
    technologies: [],
  });

  return (
    <div className="editable-container">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Circle-icons-camera.svg/2048px-Circle-icons-camera.svg.png"
        alt="profile-picture"
        className="profile-picture"
      />

      <form className="form-container">
        <Input
          label="Complete Name: *"
          name="name"
          id="name"
          value={data.fullName}
          dataOnChange={(value) => {
            setData({ ...data, fullName: value });
          }}
        />

        <Input
          label="Position:*"
          name="position"
          id="position"
          value={data.position}
          dataOnChange={(value) => setData({ ...data, position: value })}
        />

        <Input
          label="City:"
          name="city"
          id="city"
          value={data.city}
          dataOnChange={(value) => setData({ ...data, city: value })}
        />

        <Input
          label="LinkedIn:"
          name="linkedIn"
          id="linkedIn"
          placeholder="Profile link (e.g., linkedin.com/in/example)"
          value={data.linkedIn}
          dataOnChange={(value) => setData({ ...data, linkedIn: value })}
        />

        <Input
          label="Github:"
          name="github"
          id="github"
          placeholder="Profile link (e.g., github.com/example)"
          value={data.github}
          dataOnChange={(value) => setData({ ...data, github: value })}
        />

        <Input
          label="Email:"
          name="email"
          id="email"
          placeholder="yourname@example.com"
          value={data.email}
          dataOnChange={(value) => {
            setData({ ...data, email: value });
            console.log(data);
          }}
        />

        <TechnologyForm
          placeholder="Type a technology and press Enter."
          dataOnChange={(techs) => setData({ ...data, technologies: techs })}
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

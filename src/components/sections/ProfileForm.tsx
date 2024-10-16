import "../../styles/form.css";
import Input from "../common/Input";
import TechnologyForm from "./TechnologyForm";
import { useState } from "react";
import { DataType } from "../../types/DataType";
import { FiX } from "react-icons/fi";

type Props = {
  save: (data: DataType) => void;
};

export default function ProfileForm({ save }: Props) {
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
      <div className="form-header">
        <h1>Edit Profile:</h1>

        <div
          className="close-icon"
          onClick={() => {
            save(data);
          }}
        >
          <FiX size={20} />
        </div>
      </div>
      <hr className="header-underline" />

      <form className="form">
        <Input
          label="Complete Name: *"
          name="name"
          id="name"
          value={data.fullName}
          onChange={(value) => {
            setData({ ...data, fullName: value });
          }}
        />

        <Input
          label="Position:*"
          name="position"
          id="position"
          value={data.position}
          onChange={(value) => setData({ ...data, position: value })}
        />

        <Input
          label="City:"
          name="city"
          id="city"
          value={data.city}
          onChange={(value) => setData({ ...data, city: value })}
        />

        <Input
          label="LinkedIn:"
          name="linkedIn"
          id="linkedIn"
          placeholder="Profile link (e.g., linkedin.com/in/example)"
          value={data.linkedIn}
          onChange={(value) => setData({ ...data, linkedIn: value })}
        />

        <Input
          label="Github:"
          name="github"
          id="github"
          placeholder="Profile link (e.g., github.com/example)"
          value={data.github}
          onChange={(value) => setData({ ...data, github: value })}
        />

        <Input
          label="Email:"
          name="email"
          id="email"
          placeholder="yourname@example.com"
          value={data.email}
          onChange={(value) => {
            setData({ ...data, email: value });
            console.log(data);
          }}
        />

        <TechnologyForm
          placeholder="Type a technology and press Enter."
          onChange={(techs) => setData({ ...data, technologies: techs })}
        />

        <button
          className="saveButton"
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

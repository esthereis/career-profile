import { useState } from "react";
import { DataType } from "./ProfileData";
import DataInput from "./DataInput";
import Technologies from "./Technologies";

type Props = {
  save: (data: DataType) => void;
};

export default function EditableProfileData({ save }: Props) {
  const [data, setData] = useState<DataType>({
    src: "",
    fullName: "",
    position: "",
    city: "",
    linkedIn: "",
    email: "",
    github: "",
  });

  return (
    <div className="editable-container">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Circle-icons-camera.svg/2048px-Circle-icons-camera.svg.png"
        alt="profile-picture"
        className="profile-picture"
      />

      <form className="form-container">
        <DataInput
          label="Complete Name: *"
          name="name"
          id="name"
          value={data.fullName}
          dataOnChange={(value) => {
            setData({ ...data, fullName: value });
          }}
        />

        <DataInput
          label="Position:*"
          name="position"
          id="position"
          value={data.position}
          dataOnChange={(value) => setData({ ...data, position: value })}
        />

        <DataInput
          label="City:"
          name="city"
          id="city"
          value={data.city}
          dataOnChange={(value) => setData({ ...data, city: value })}
        />

        <DataInput
          label="LinkedIn:"
          name="linkedIn"
          id="linkedIn"
          value={data.linkedIn}
          dataOnChange={(value) => setData({ ...data, linkedIn: value })}
        />

        <DataInput
          label="Github:"
          name="github"
          id="github"
          value={data.github}
          dataOnChange={(value) => setData({ ...data, github: value })}
        />

        <DataInput
          label="Email:"
          name="email"
          id="email"
          value={data.email}
          dataOnChange={(value) => {
            setData({ ...data, email: value });
            console.log(data);
          }}
        />

        <Technologies />

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

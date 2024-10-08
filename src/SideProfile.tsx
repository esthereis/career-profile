import { FiLinkedin, FiMail, FiGithub, FiEdit2 } from "react-icons/fi";
import Technologies from "./components/Technologies";
import { useState } from "react";
import Form from "./components/Form";
import "./styles/profile.css";

export type DataType = {
  fullName: string;
  position: string;
  city: string;
  linkedIn: string;
  email: string;
  github: string;
  technologies?: string[];
};

export default function SideProfile() {
  const [editPressed, setEditPressed] = useState<boolean>(false);
  const [editedData, setEditedData] = useState<DataType>();

  return (
    <div className="profile">
      <div className="data">
        <div>
          <img
            src="https://cdn.lospec.com/gallery/pikachu-122671.png"
            alt="profile-picture"
            className="profile-picture"
          />
          <h1>{editedData?.fullName}</h1>
          <p> {editedData?.position}</p>
          <p>{editedData?.city}</p>
        </div>

        <div>
          <a href={editedData?.linkedIn} target="_blank" className="icon">
            <FiLinkedin />
          </a>

          <a href={editedData?.email} target="_blank" className="icon">
            <FiMail />
          </a>

          <a href={editedData?.github} target="_blank" className="icon">
            <FiGithub />
          </a>
          <Technologies technologies={editedData?.technologies} />
        </div>

        <button
          onClick={() => {
            setEditPressed(true);
          }}
        >
          <FiEdit2 />
          TEXT
        </button>
      </div>
      {editPressed && (
        <Form
          save={(data) => {
            setEditedData(data);
            setEditPressed(false);
          }}
        />
      )}
    </div>
  );
}

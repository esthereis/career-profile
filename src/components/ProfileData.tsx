import { FiLinkedin, FiMail, FiGithub, FiEdit2 } from "react-icons/fi";
import TechnologiesContainer from "./TechnologiesContainer";
import { useState } from "react";
import EditableProfileData from "./EditableProfileData";

export type DataType = {
  src: string;
  fullName: string;
  position: string;
  city: string;
  linkedIn: string;
  email: string;
  github: string;
};

export default function ProfileData({
  src,
  fullName,
  position,
  city,
  linkedIn,
  email,
  github,
}: DataType) {
  const [editPressed, setEditPressed] = useState<boolean>(false);
  const [editedData, setEditedData] = useState<DataType>();

  return (
    <div className="profile-box">
      <div className="data-container">
        <div>
          <img src={src} alt="profile-picture" className="profile-picture" />
          <h1>{editedData?.fullName}</h1>
          <p> {editedData?.position}</p>
          <p>{editedData?.city}</p>
        </div>

        <div className="icons-line">
          <a href={editedData?.linkedIn} target="_blank" className="icon">
            <FiLinkedin />
          </a>

          <a href={editedData?.email} target="_blank" className="icon">
            <FiMail />
          </a>

          <a href={editedData?.github} target="_blank" className="icon">
            <FiGithub />
          </a>
        </div>

        <TechnologiesContainer />

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
        <EditableProfileData
          save={(data) => {
            setEditedData(data);
            setEditPressed(false);
          }}
        />
      )}
    </div>
  );
}

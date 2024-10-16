import "../../styles/profile.css";
import Technologies from "../common/Technologies";
import ProfileForm from "./ProfileForm";
import { FiLinkedin, FiMail, FiGithub, FiEdit2 } from "react-icons/fi";
import { useState } from "react";
import { DataType } from "../../types/DataType";
import { IoMdColorPalette } from "react-icons/io";
import ColorModal from "./ColorModal";

export default function SideProfile() {
  const [editPressed, setEditPressed] = useState<boolean>(false);
  const [editedData, setEditedData] = useState<DataType>();
  const [colorModalPressed, setColorModalPressed] = useState<boolean>(false);
  const [backgroundColor, setBackgroundColor] = useState<string | undefined>();

  return (
    <div style={{ backgroundColor: backgroundColor }} className="profile">
      <div className="data">
        <div className="text">
          <img
            src="https://cdn.lospec.com/gallery/pikachu-122671.png"
            alt="profile-picture"
            className="profile-picture"
          />
          <h1 className="full-name">{editedData?.fullName}</h1>
          <p> {editedData?.position}</p>
          <p>{editedData?.city}</p>
        </div>

        {editedData && (
          <div className="icons">
            {editedData.linkedIn && (
              <a href={editedData?.linkedIn} target="_blank" className="icon">
                <FiLinkedin />
              </a>
            )}

            {editedData.email && (
              <a href={editedData?.email} target="_blank" className="icon">
                <FiMail />
              </a>
            )}
            {editedData.github && (
              <a href={editedData?.github} target="_blank" className="icon">
                <FiGithub />
              </a>
            )}
          </div>
        )}

        <Technologies
          technologies={editedData?.technologies}
          className="profile-tech-list"
        />
        <button
          className=" button button-edit"
          onClick={() => {
            setEditPressed(true);
          }}
        >
          <FiEdit2 />
        </button>

        {colorModalPressed && (
          <ColorModal
            changeBackgroundColor={(color) => setBackgroundColor(color)}
            closeButton={() => setColorModalPressed(false)}
          />
        )}
        <button
          className="button button-color"
          onClick={() => setColorModalPressed(!colorModalPressed)}
        >
          <IoMdColorPalette size={20} />
        </button>
      </div>
      {editPressed && (
        <ProfileForm
          save={(data) => {
            setEditedData(data);
            setEditPressed(false);
          }}
        />
      )}
    </div>
  );
}

import { FiLinkedin, FiMail, FiGithub, FiEdit2 } from "react-icons/fi";
import TechnologiesContainer from "./TechnologiesContainer";

export default function EditableProfileData() {
  return (
    <div className="data-container">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Circle-icons-camera.svg/2048px-Circle-icons-camera.svg.png"
        alt="profile-picture"
        className="profile-picture"
      />

      <form>
        <label htmlFor="first-name">Name:*</label>
        <input type="text" name="firstName" id="first-name" />

        <label htmlFor="surname">Surname:*</label>
        <input type="text" name="surname" id="surname" />

        <label htmlFor="function">Function:*</label>
        <input type="text" name="function" id="function" />

        <label htmlFor="city">City:</label>
        <input type="text" name="city" id="city" />

        <label htmlFor="linked-In">LinkedIn:</label>
        <input type="text" name="linkedIn" id="linked-In" />

        <label htmlFor="github">Github:</label>
        <input type="text" name="github" id="github" />

        <label htmlFor="email">Email:</label>
        <input type="text" name="email" id="email" />

        <label htmlFor="technologies">Technologies:</label>
        <input type="text" name="technologies" id="technologies" />
      </form>
    </div>
  );
}

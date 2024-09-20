import { FiLinkedin, FiMail, FiGithub, FiEdit2 } from "react-icons/fi";
import TechnologiesContainer from "./TechnologiesContainer";

type Props = {
  src: string;
};

export default function ProfileData({ src }: Props) {
  return (
    <div className="profile-box">
      <div className="data-container">
        <img src={src} alt="profile-picture" className="profile-picture" />
        <h1>Esther Reis</h1>
        <p> Junior Front End Developer</p>
        <p>Almere, Netherlands</p>
      </div>

      <div className="icons-line">
        <a
          href="https://www.linkedin.com/in/esther-reis-dev/"
          target="_blank"
          className="icon"
        >
          <FiLinkedin />
        </a>

        <a
          href="mailto:estherjuliane@gmail.com"
          target="_blank"
          className="icon"
        >
          <FiMail />
        </a>

        <a href="https://github.com/esthereis" target="_blank" className="icon">
          <FiGithub />
        </a>
      </div>

      <TechnologiesContainer />
      <FiEdit2 />
    </div>
  );
}

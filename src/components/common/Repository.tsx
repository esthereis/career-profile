import { FiBook, FiCircle, FiStar } from "react-icons/fi";
import { GoRepoForked } from "react-icons/go";
import "../../styles/repository.css";
import { RepositoryType } from "../../types/RepositoryType";

type Repository = Omit<RepositoryType, "id">;

export default function Repository({
  name,
  description,
  forks,
  stars,
  language,
}: Repository) {
  return (
    <div className="repository-card">
      <div className="repository-title">
        <FiBook />
        <p className="repository-name">{name}</p>
      </div>

      <p className="repository-description">{description}</p>

      <div className="repository-footer">
        <div className="repository-footer-info">
          <FiCircle size={"13"} strokeWidth={"2"} />
          <p>{language}</p>
        </div>

        <div className="repository-footer-info">
          <FiStar size={"15"} strokeWidth={"2"} />
          <p>{stars}</p>
        </div>

        <div className="repository-footer-info">
          <GoRepoForked size={"15"} strokeWidth={"1"} />
          <p>{forks}</p>
        </div>
      </div>
    </div>
  );
}

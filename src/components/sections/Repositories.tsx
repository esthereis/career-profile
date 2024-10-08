import "../../styles/repository.css";
import "../../styles/slick-carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Repository from "../common/Repository";
import Slider from "react-slick";
import { getRepos } from "../../api/octokit";
import { Fragment, useEffect, useState } from "react";
import { SlickSettings } from "../../types/SlickSettings";

type Repository = {
  id: number;
  description: string;
  name: string;
  language: string;
  stargazers_count: number;
  forks: number;
};

export default function Repositories() {
  const [repositories, setRepositories] = useState();
  useEffect(() => {
    getRepos().then((data) => {
      setRepositories(data);
    });
  }, []);

  const settings: SlickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (
    <div className="repositories-list">
      <h1 className="underline">My Projects</h1>

      <div>
        <Slider {...settings}>
          {repositories?.map((repository: Repository) => (
            <Fragment key={repository.id}>
              <Repository
                description={repository.description}
                name={repository.name}
                language={repository.language}
                stars={repository.stargazers_count}
                fork={repository.forks}
              />
            </Fragment>
          ))}
        </Slider>
      </div>
    </div>
  );
}

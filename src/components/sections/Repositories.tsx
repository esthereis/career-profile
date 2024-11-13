import "../../styles/repository.css";
import "../../styles/slick-carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RepositoryType } from "../../types/RepositoryType";
import Repository from "../common/Repository";
import Slider from "react-slick";
import { getRepos } from "../../api/octokit";
import { Fragment, useEffect, useState } from "react";
import { SlickSettings } from "../../types/SlickSettings";

export default function Repositories() {
  const [repositories, setRepositories] = useState<RepositoryType[]>();
  useEffect(() => {
    getRepos().then((data) => {
      setRepositories(data);
      console.log(data);
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
      <h1 className="underline">My Repositories</h1>

      <div>
        <Slider {...settings}>
          {repositories?.map((repository: RepositoryType) => (
            <Fragment key={repository.id}>
              <Repository
                description={repository.description}
                name={repository.name}
                language={repository.language}
                stars={repository.stars}
                forks={repository.forks}
              />
            </Fragment>
          ))}
        </Slider>
      </div>
    </div>
  );
}

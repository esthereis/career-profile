import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RepositoryType } from "../../types/RepositoryType";
import Repository from "../common/Repository";
import Slider, { Settings } from "react-slick";
import { getRepos } from "../../api/octokit";
import { useEffect, useState } from "react";

export default function Repositories() {
  const [repositories, setRepositories] = useState<RepositoryType[]>();

  useEffect(() => {
    getRepos().then((data) => {
      setRepositories(data);
    });
  }, []);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="title">
        <h1>My Repositories</h1>
        <hr />
      </div>

      <div className="repositories-container">
        <Slider {...settings}>
          {repositories?.map((repository: RepositoryType) => (
            <Repository
              key={repository.id}
              description={repository.description}
              name={repository.name}
              language={repository.language}
              stars={repository.stars}
              forks={repository.forks}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

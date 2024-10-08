import "../../styles/certificate.css";
import "../../styles/slick-carousel.css";
import Certificate from "../common/Certificate";
import Slider from "react-slick";
import { SlickSettings } from "../../types/SlickSettings";

export default function Certificates() {
  const settings: SlickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div className="certificates-container">
      <h1 className="underline">My Certificates</h1>
      <Slider {...settings}>
        <Certificate
          alt="rocketSeatImage"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFa8GmB3beGYMImUfjFOXEnhsN1shN8sEHXg&s"
          title="Rocketseat"
          description="Fundamentals of HTML, CSS, JavaScript, NodeJS, SQL."
        />

        <Certificate
          alt="rocketSeatImage"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFa8GmB3beGYMImUfjFOXEnhsN1shN8sEHXg&s"
          title="Rocketseat"
          description="Conect- Intro to programming,basics of hardware and software, internet, servers, and more."
        />

        <Certificate
          alt="rocketSeatImage"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFa8GmB3beGYMImUfjFOXEnhsN1shN8sEHXg&s"
          title="Rocketseat"
          description="Fundamentals of HTML, CSS, JavaScript, NodeJS, SQL."
        />

        <Certificate
          alt="rocketSeatImage"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFa8GmB3beGYMImUfjFOXEnhsN1shN8sEHXg&s"
          title="Rocketseat"
          description="Conect- Intro to programming,basics of hardware and software, internet, servers, and more."
        />
      </Slider>
    </div>
  );
}

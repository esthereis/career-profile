import "../../styles/certificate.css";
import Certificate from "../common/Certificate";
import Slider from "react-slick";

export default function Certificates() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (
    <div className="certificates-container">
      <div className="title">
        <h1>My Certificates</h1>
        <hr />
      </div>
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

import "../../styles/certificate.css";
import "../../styles/slick-caroussel.css";
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
          alt="branasImage"
          src="https://www.branas.io/images/logo.png"
          title="Rodrigo Branas"
          description="JavaScript MasterClass"
        />

        <Certificate
          alt="kentDoddsImage"
          src="https://res.cloudinary.com/kentcdodds-com/image/upload/w_900,q_auto,f_auto/kentcdodds.com/illustrations/kody/kody_onewheeling_flying_red"
          title="Kent C. Dodds"
          description="Epic React"
        />

        <Certificate
          alt="cs50Image"
          src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*IYCifTCCR2ah-79u94Z3wg.png"
          title="HarvardX"
          description="CS50’s Introduction to Computer Science"
        />

        <Certificate
          alt="codamImage"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIc3pIjhzItMN5LBzbuz_shTDqXY_B7w-TUg&s"
          title="Codam"
          description="Piscine"
        />
      </Slider>
    </div>
  );
}

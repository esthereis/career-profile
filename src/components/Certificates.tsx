import CertificateCourse from './CertificateCourse';
import Slider from 'react-slick';

type SlickSettings = {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
};

export default function Certificates() {
  const settings: SlickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };

  return (
    <div className='certificates-container'>
      <h1 className='underline'>My Certificates</h1>
      <Slider {...settings}>
        <CertificateCourse
          alt='rocketSeatImage'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFa8GmB3beGYMImUfjFOXEnhsN1shN8sEHXg&s'
          title='Rocketseat'
          description='Fundamentals of HTML, CSS, JavaScript, NodeJS, SQL.'
        />

        <CertificateCourse
          alt='rocketSeatImage'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFa8GmB3beGYMImUfjFOXEnhsN1shN8sEHXg&s'
          title='Rocketseat'
          description='Conect- Intro to programming,basics of hardware and software, internet, servers, and more.'
        />

        <CertificateCourse
          alt='rocketSeatImage'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFa8GmB3beGYMImUfjFOXEnhsN1shN8sEHXg&s'
          title='Rocketseat'
          description='Fundamentals of HTML, CSS, JavaScript, NodeJS, SQL.'
        />

        <CertificateCourse
          alt='rocketSeatImage'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFa8GmB3beGYMImUfjFOXEnhsN1shN8sEHXg&s'
          title='Rocketseat'
          description='Conect- Intro to programming,basics of hardware and software, internet, servers, and more.'
        />
      </Slider>
    </div>
  );
}

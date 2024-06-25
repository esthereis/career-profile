import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type Props = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

export default function CertificateCourse({
  src,
  alt,
  title,
  description
}: Props) {
  return (
    <div className='course-box'>
      <img src={src} alt={alt} className='course-image' />

      <div className='course-info'>
        <p className='course-title'>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

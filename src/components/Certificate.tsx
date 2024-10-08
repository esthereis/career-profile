import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/certificate.css";

type Props = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

export default function Certificate({ src, alt, title, description }: Props) {
  return (
    <div className="certificate-box">
      <img src={src} alt={alt} className="certificate-image" />

      <div className="certificate-info">
        <p className="certificate-title">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

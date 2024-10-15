import "../../styles/technology.css";

type Props = {
  technologies: string[] | undefined;
  className: string;
};

export default function Technologies({ technologies, className }: Props) {
  return (
    <div className={`${className}`}>
      {technologies?.map((tech) => (
        <p>{tech}</p>
      ))}
    </div>
  );
}

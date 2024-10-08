import "../styles/technology.css";

type Props = {
  technologies: string[];
};

export default function Technologies({ technologies }: Props) {
  return (
    <div className="tech-list">
      {technologies?.map((tech) => (
        <p>{tech}</p>
      ))}
    </div>
  );
}

type Props = {
  technologies: string[];
};

export default function TechnologiesContainer({ technologies }: Props) {
  return (
    <div className="tech-list">
      {technologies?.map((tech) => (
        <p>{tech}</p>
      ))}
    </div>
  );
}

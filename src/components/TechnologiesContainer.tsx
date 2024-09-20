type Props = {
  technologies: string;
};

export default function TechnologiesContainer({ technologies }: Props) {
  return (
    <div className="data-container">
      <h1>Technologies</h1>
      <p>{technologies}</p>
    </div>
  );
}

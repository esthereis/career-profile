import "../../styles/colors.css";

type Props = {
  changeBackgroundColor: (color: string | undefined) => void;
  closeButton: () => void;
};

const colors: string[] = [
  "rgb(237, 235, 211)",
  "rgb(204, 126, 141)",
  "rgb(190, 234, 237)",
  "rgb(207, 180, 195)",
  "rgb(184, 174, 192)",
  "rgb(224, 196, 146)",
];

export default function ColorModal({
  changeBackgroundColor,
  closeButton,
}: Props) {
  return (
    <div className="color-container">
      {colors.map((color) => (
        <button
          className="squares"
          style={{ backgroundColor: color }}
          onClick={() => {
            changeBackgroundColor(color);
            closeButton();
          }}
        />
      ))}
    </div>
  );
}

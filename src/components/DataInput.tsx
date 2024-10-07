type Props = {
  label: string;
  name: string;
  id: string;
  value: string;
  dataOnChange: (value: string) => void;
};

export default function DataInput({
  label,
  name,
  id,
  value,
  dataOnChange,
}: Props) {
  return (
    <>
      <label htmlFor="name">{label}</label>
      <input
        type="text"
        name={name}
        id={id}
        value={value}
        onChange={(e) => {
          dataOnChange(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
      />
    </>
  );
}

type Props = {
  label: string;
  name: string;
  id: string;
  placeholder?: string;
  value: string;
  dataOnChange: (value: string) => void;
};

export default function Input({
  label,
  name,
  id,
  placeholder,
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
        placeholder={placeholder}
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

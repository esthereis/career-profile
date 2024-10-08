type Props = {
  label: string;
  name: string;
  id: string;
  placeholder?: string;
  value: string;
  OnChange: (value: string) => void;
};

export default function Input({
  label,
  name,
  id,
  placeholder,
  value,
  OnChange,
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
          OnChange(e.target.value);
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

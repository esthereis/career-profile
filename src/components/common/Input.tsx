type Props = {
  label: string;
  name: string;
  id: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export default function Input({
  label,
  name,
  id,
  placeholder,
  value,
  onChange,
  onKeyDown,
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
          onChange(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
          onKeyDown?.(e);
        }}
      />
    </>
  );
}

type Props = {
  label: string;
  name: string;
  id: string;
  placeholder?: string;
  value: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  error?: string;
};

export default function Input({
  label,
  name,
  id,
  placeholder,
  value,
  onChange,
  onKeyDown,
  error,
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
          onChange(e);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
          onKeyDown?.(e);
        }}
      />
      <p className="error">{error}</p>
    </>
  );
}

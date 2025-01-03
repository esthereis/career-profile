import { useField } from "formik";

type Props = {
  label: string;
  name: string;
  placeholder?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export default function Input({ label, name, placeholder, onKeyDown }: Props) {
  const [field, meta] = useField(name);
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        {...field}
        type="text"
        id={name}
        placeholder={placeholder}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
          onKeyDown?.(e);
        }}
      />
      {meta.touched && meta.error && <p className="error">{meta.error}</p>}
    </>
  );
}

import { DataType } from "../types/DataType";

export default function validateData(values: DataType) {
  const errors = {};
  if (!values.fullName) {
    errors.fullName = "Required";
  } else if (values.fullName.length > 20) {
    errors.fullName = "Must be 20 characters or less";
  }
  console.log(errors);
  return;
}

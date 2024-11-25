import "../../styles/form.css";
import Input from "../common/Input";
import TechnologyForm from "./TechnologyForm";
import { DataType } from "../../types/DataType";
import { FiX } from "react-icons/fi";
import { useFormik } from "formik";
import * as Yup from "yup";

type Props = {
  save: (data: DataType) => void;
};

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, "Name must be at least 2 characters")
    .max(25, "Name must be a maximum of 25 characters")
    .required("Name is required"),
  position: Yup.string().required("Position is required"),
  city: Yup.string()
    .min(3, "City must be at least 2 characters")
    .required("City is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

export default function ProfileForm({ save }: Props) {
  const formik = useFormik<DataType>({
    initialValues: {
      fullName: "",
      position: "",
      city: "",
      linkedIn: "",
      email: "",
      github: "",
      technologies: [],
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      save(values);
    },
  });

  return (
    <div className="form-container">
      <div className="form-header">
        <h1>Edit Profile:</h1>

        <div
          className="close-icon"
          onClick={() => {
            save(formik.values);
          }}
        >
          <FiX size={20} />
        </div>
      </div>
      <hr className="header-underline" />

      <form className="form" onSubmit={formik.handleSubmit}>
        <Input
          label="Full Name: *"
          name="fullName"
          id="name"
          placeholder="Full Name"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          error={formik.errors.fullName}
        />

        <Input
          label="Position:*"
          name="position"
          id="position"
          value={formik.values.position}
          onChange={formik.handleChange}
          error={formik.errors.position}
        />

        <Input
          label="City:"
          name="city"
          id="city"
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.errors.city}
        />

        <Input
          label="LinkedIn:"
          name="linkedIn"
          id="linkedIn"
          placeholder="Profile link (e.g., linkedin.com/in/example)"
          value={formik.values.linkedIn}
          onChange={formik.handleChange}
        />

        <Input
          label="Github:"
          name="github"
          id="github"
          placeholder="Profile link (e.g., github.com/example)"
          value={formik.values.github}
          onChange={formik.handleChange}
        />

        <Input
          label="Email:"
          name="email"
          id="email"
          placeholder="yourname@example.com"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
        />

        <TechnologyForm
          placeholder="Type a technology and press Enter."
          onChange={(technologies) =>
            formik.setFieldValue("technologies", technologies)
          }
        />

        <button type="submit" className="saveButton">
          Save
        </button>
      </form>
    </div>
  );
}

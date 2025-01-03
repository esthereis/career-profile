import "../../styles/form.css";
import Input from "../common/Input";
import TechnologyForm from "./TechnologyForm";
import { DataType } from "../../types/DataType";
import { FiX } from "react-icons/fi";
import { Formik, Form } from "formik";
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
  return (
    <Formik
      initialValues={{
        fullName: "",
        position: "",
        city: "",
        linkedIn: "",
        email: "",
        github: "",
        technologies: [],
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        save(values);
      }}
    >
      {({ handleSubmit, setFieldValue }) => (
        <div className="form-container">
          <div className="form-header">
            <h1>Edit Profile:</h1>

            <div
              className="close-icon"
              onClick={() => {
                handleSubmit();
              }}
            >
              <FiX size={20} />
            </div>
          </div>
          <hr className="header-underline" />

          <Form className="form">
            <Input
              label="Full Name: *"
              name="fullName"
              placeholder="Full Name"
            />

            <Input label="Position:*" name="position" />

            <Input label="City:" name="city" />

            <Input
              label="LinkedIn:"
              name="linkedIn"
              placeholder="Profile link (e.g., linkedin.com/in/example)"
            />

            <Input
              label="Github:"
              name="github"
              placeholder="Profile link (e.g., github.com/example)"
            />

            <Input
              label="Email:"
              name="email"
              placeholder="yourname@example.com"
            />

            <TechnologyForm
              placeholder="Type a technology and press Enter."
              onChange={(technologies) =>
                setFieldValue("technologies", technologies)
              }
            />

            <button type="submit" className="saveButton">
              Save
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
}

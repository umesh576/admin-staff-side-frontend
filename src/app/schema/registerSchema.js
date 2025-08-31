import * as yup from "yup";
import { string } from "yup";

const SUPPORT_FORMAT = ["image/jpeg", "image/png", "image/jpg"];
const MAX_SIZE = 2 * 1024 * 1024;
export const registerSchema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required.")
    .min(6, "Password must have minimun 6 character. ")
    .max(100, "Password is not more than 8 character")
    .matches(/[A-Z]/, "Password have at least one uppercase character.")
    .matches(/[0-9]/, "Passowrd must have at least one Number.")
    .matches(/[@$!%*?&]/, "password must have one special character."),

  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must be match.")
    .required("Confirmpassword must required."),

  firstName: string()
    .required("Firstname is required.")
    .min(3, "Minimun 3 character are necessary for register.")
    .max(30, "Maximun 30 character only allow for register."),

  lastName: yup
    .string()
    .required("Lastname is required.")
    .min(3, "Minimun 3 character are necessary for register.")
    .max(30, "Maximun 30 character only allow for register."),

  email: yup
    .string()
    .required("Email is required for login.")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
      "Email is not match on format."
    ),
  gender: yup.string().required("Gender is required for Signup."),
  profilePicture: yup
    .mixed()
    .test(
      "fileSize",
      "File size is too large. Max 2MB.",
      (value) => value && value[0] && value[0].size <= MAX_SIZE
    )
    .test(
      "fileFormat",
      "Unsupported format. Only JPG, JPEG, PNG allowed.",
      (value) => value && value[0] && SUPPORT_FORMAT.includes(value[0].type)
    ),
  phonenumber: yup
    .string()
    .required("At least one number is nessary.")
    .length(10, "Number have 10 character only."),
});

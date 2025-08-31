import * as yup from "yup";
import { string } from "yup";

export const registerSchema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required.")
    .min(6, "Password must have minimun 6 character. ")
    .max(100, "Password is not more than 8 character")
    .matches("/[A-Z]/", "Password have at least one uppercase character.")
    .matches("/[0-9]/", "Passowrd must have at least one Number.")
    .matches("/[@$!%*?&]/", "password must have one special character."),

  confirmPassword: yup
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
      "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/",
      "Email is not match on format."
    ),
});

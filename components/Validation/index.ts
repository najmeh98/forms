import * as Yup from "yup";
import { ref, string } from "yup";

const randomRegex: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const getCharacterValidationError = (str: string): string => {
  return `Your password must have at least 1 ${str} character`;
};

export const SignUpSchema = Yup.object({
  userName: Yup.string()
    .required("Please Enter your name!")
    .min(4, "Must be longer than 2 characters")
    .max(12, "Nice try, nobody has a first name that long"),

  email: Yup.string()
    .email()
    .required("Required")
    .matches(randomRegex, "Invalid email address"),

  password: string()
    .required("Please enter a password")
    .min(8, "Password must have at least 8 characters")
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase")),

  confirmpassword: string()
    .required("Please re-type your password")
    .oneOf([ref("password")], "Passwords does not match"),
});

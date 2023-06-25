import * as Yup from "yup";
import { object, ref, string } from "yup";

const randomRegex: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const phoneRegExp =
  /[0۰][9۹]([0-39۹\u06F0-\u06F3])[0-9\u06F0-\u06F9]-?[0-9\u06F0-\u06F9]{3}-?[0-9\u06F0-\u06F9]{4}/gu;

const getCharacterValidationError = (str: string): string => {
  return `Your password must have at least 1 ${str} character`;
};

export const SignUpSchema = object({
  userName: string()
    .required("Please Enter your name!")
    .min(4, "Must be longer than 2 characters")
    .max(12, "Nice try, nobody has a first name that long"),

  email: string()
    .email()
    .required("Please Enter your email !")
    .matches(randomRegex, "Invalid email address"),

  phoneNumber: string()
    .required("Please Enter your phoneNumber!")
    .matches(phoneRegExp, "Invalid phone Number"),

  password: string()
    .required("Please enter a password")
    .min(8, "Password must have at least 8 characters")
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase")),

  confirmPassword: string()
    .required("Please re-type your password")
    .oneOf([ref("password")], "Passwords does not match"),
});

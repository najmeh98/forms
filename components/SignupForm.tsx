import React from "react";
import { Formik, useFormik } from "formik";
import { ISignupParams } from "../types/signup.interface";
import { CustomInput } from "./CustomInput";
import { HiOutlineMail } from "react-icons/hi";
import { HiMiniUser } from "react-icons/hi2";
import { CgKeyhole } from "react-icons/cg";
import { SignUpSchema } from "./Validation";
import { CustomButton } from "./CustomButton";
import { Text } from "./HeaderText";

const initialValues: ISignupParams = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignupForm = (): React.JSX.Element => {
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: initialValues,
      validationSchema: SignUpSchema,
      onSubmit: (values) => console.log(values),
    });

  return (
    <div className="flex flex-col border border-solid border-slate-200 p-10 shadow-md rounded-lg">
      <form
        className="flex flex-col items-start justify-between "
        onSubmit={handleSubmit}
      >
        <CustomInput
          type="text"
          name="userName"
          icon={<HiMiniUser className="w-5 h-5  text-slate-400" />}
          id="username"
          value={values.userName}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Your name"
        />

        {touched.userName && errors.userName && (
          <Text className="text-purple-400">{errors.userName}</Text>
        )}

        <CustomInput
          type="email"
          name="email"
          icon={<HiOutlineMail className="w-5 h-5  text-slate-400" />}
          id="email"
          placeholder="Your email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {touched.email && errors.email && (
          <Text className="text-purple-400">{errors.email}</Text>
        )}

        <CustomInput
          type="password"
          name="password"
          icon={<CgKeyhole className="w-5 h-5  text-slate-400" />}
          id="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {touched.password && errors.password && (
          <Text className="text-purple-400">{errors.password}</Text>
        )}

        <CustomInput
          type="password"
          name="confirmPassword"
          icon={<CgKeyhole className="w-5 h-5  text-slate-400" />}
          id="confirmPassword"
          placeholder="Re-enter-password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {touched.confirmPassword && errors.confirmPassword && (
          <Text className="text-purple-400">{errors.confirmPassword}</Text>
        )}

        <CustomButton
          type="submit"
          disabled={!!Object.keys(errors).length}
          text="Sign up now"
          className="h-11 rounded-lg  mt-6 cursor-pointer   w-full bg-gradient-to-r from-blue-500 from-10% via-indigo-500 via-30% to-pink-600 to-90%  text-white text-base font-bold"
        />
      </form>
    </div>
  );
};

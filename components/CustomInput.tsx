import React, { ChangeEvent } from "react";
import styled from "styled-components";

interface TextInput {
  type: "text";
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface TextPassword {
  type: "password";
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
interface TextEmail {
  type: "email";
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export type InputCommonProps = {
  name: string;
  id: string;
  icon: any;
  placeholder?: string;
  className?: string;
  value: string | number;
  label?: string;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  onSubmit?: (() => void) | undefined;
};

type Props = (TextInput | TextPassword | TextEmail) & InputCommonProps;

export const CustomInput: React.FC<Props> = ({
  name,
  id,
  type,
  className,
  value,
  onChange,
  onBlur,
  label,
  placeholder,
  icon,
}) => {
  return (
    <div className="w-full flex flex-col justify-start  items-start relative mt-4">
      {icon && (
        <div className="absolute flex items-center   top-4  pl-2 pr-1">
          {icon}
        </div>
      )}

      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className=" placeholder:text-base   outline-none h-[50px] px-9 shadow-md shadow-purple-200 transition duration-150 ease-in-out	 flex rounded-lg w-full mb-[5px] font-normal  border border-solid border-purple-500  focus:border-[1.5px] focus:border-[#961acb]"
      />
    </div>
  );
};

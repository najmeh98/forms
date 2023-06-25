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

      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className=" outline-none h-[50px] px-9  flex rounded-lg w-full mb-[5px] font-normal  border border-solid border-purple-400 "
      />
    </div>
  );
};

export const Input = styled.input`
  box-shadow: rgb(51 59 75 / 5%) 0px 16px 40px 0px;
  transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
  &::placeholder {
    font-size: 16px;
  }

  &:focus {
    outline: none;
    border: 1.5px solid #961acb;
  }
`;

const Label = styled.label`
  ${Input}:focus ~ & {
    transform: translateY(-56%) scale(0.8);
    padding: 0px 0.2em 0.2em 0.2em;
    background-color: #ffff;
    color: #1a73e8;
    font-size: 20px;
    top: 0px;
  }
`;

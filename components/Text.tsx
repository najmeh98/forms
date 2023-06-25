import { ReactNode } from "react";

interface IProp {
  children: ReactNode;
  className?: string;
}
export const Text = ({ children, className }: IProp): JSX.Element => {
  return <p className={className}>{children}</p>;
};

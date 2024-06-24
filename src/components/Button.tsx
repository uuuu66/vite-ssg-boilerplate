import { HtmlHTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface Props
  extends PropsWithChildren<HtmlHTMLAttributes<HTMLButtonElement>> {}

const Button: React.FC<Props> = (props) => {
  return (
    <button
      {...props}
      className={
        (twMerge(props.className), "flex py-4 px-8 rounded-xl bg-blue-600")
      }
    >
      {props.children}
    </button>
  );
};
export default Button;

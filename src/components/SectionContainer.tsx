import { HtmlHTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends PropsWithChildren<HtmlHTMLAttributes<HTMLDivElement>> {}
const SectionContainer: React.FC<Props> = (props) => {
  return (
    <section
      {...props}
      className={twMerge(
        "h-screen min-h-screen max-h-screen w-full flex justify-center items-center",
        props.className
      )}
    >
      {props.children}
    </section>
  );
};

export default SectionContainer;

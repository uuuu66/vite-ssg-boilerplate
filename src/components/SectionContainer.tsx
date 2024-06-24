import { HtmlHTMLAttributes, PropsWithChildren, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends PropsWithChildren<HtmlHTMLAttributes<HTMLDivElement>> {}
const SectionContainer = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <section
      ref={ref}
      {...props}
      className={twMerge(
        "h-screen min-h-screen max-h-screen w-full flex justify-center items-center",
        props.className
      )}
    >
      {props.children}
    </section>
  );
});

export default SectionContainer;

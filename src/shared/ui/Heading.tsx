import clsx from "clsx";
import {ComponentPropsWithRef} from "react";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type Font = 'heading'

interface HeadingProps extends ComponentPropsWithRef<"h2"> {
  as?: HeadingTag;
  font?: Font
}

const styles: Record<HeadingTag, string> = {
  h1: "text-5xl max-md:text-4xl  font-bold",
  h2: "text-4xl max-md:text-3xl  font-bold",
  h3: "text-3xl max-md:text-2xl  font-semibold",
  h4: "text-2xl max-md:text-xl  font-semibold",
  h5: "text-xl max-md:text-lg  font-medium",
  h6: "text-lg max-md:text-base  font-medium",
};

export const Heading = ({
                          as: Tag = "h2",
                          className,
                          children,
                          font,
                          ...props
                        }: HeadingProps) => {
  return (
    <Tag className={clsx(styles[Tag], className, font && `font-${font}`)} {...props}>
      {children}
    </Tag>
  );
};

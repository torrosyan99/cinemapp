import {ReactNode} from "react";
import clsx from "clsx";

interface BoxProps {
  className?:string,
  children:ReactNode
}

export const Box = ({className, children}:BoxProps) => {
  return (
    <div className={clsx('rounded-2xl bg-surface', className)}>
      {children}
    </div>
  );
};

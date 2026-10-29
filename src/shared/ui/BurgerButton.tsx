import clsx from "clsx";
import {motion} from "framer-motion";
interface BurgerButtonProps {
  className?:string;
  onClick?: () => void;
  isOpen?:boolean;
}


export const BurgerButton = ({className, onClick, isOpen}:BurgerButtonProps) => {
  const spanBasicClass = 'absolute block w-4 h-px bg-white top-1/2'
  return (
    <button className={clsx('size-4 relative', className)} onClick={onClick}>
      <motion.span initial={false} className={spanBasicClass} animate={{
        y:isOpen ? 0 : -4,
        rotate: isOpen ? 45: 0
      }}
                  />
      <motion.span
        initial={false}
        animate={{
        width:isOpen ? 0 : 16,
      }} className={clsx(spanBasicClass)}/>

      <motion.span initial={false} className={spanBasicClass} animate={{
        y:isOpen ? 0 : 4,
        rotate: isOpen ? -45: 0
      }}/>
    </button>
  );
};

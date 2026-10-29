'use client'

import {BurgerButton} from "@/shared/ui/BurgerButton";
import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Navigation} from "@/widgets/Header/ui/Navigation";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)


  useEffect(() => {
    const media = matchMedia('(min-width: 768px)')
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else document.body.classList.remove('overflow-hidden')


    media.addEventListener('change', closeMenu)

    return () => {
      document.body.classList.remove('overflow-hidden')
      media.removeEventListener('change', closeMenu)
    }

  }, [isOpen])
  return (
    <div className={'hidden max-md:block'}>
      <BurgerButton isOpen={isOpen} onClick={() => setIsOpen(o => !o)}/>

      <AnimatePresence>
        {isOpen && <motion.div
          className={'fixed z-100 bg-background px-4 top-16 inset-x-0 bottom-0'}
          initial={{ x: '100%' }}
          animate={{x: 0 }}
          exit={{x: '100%'}}
          transition={{
            type: "tween",
            duration: 0.2,
            ease: "easeInOut",
          }}
        >

          <Navigation  onNavigate={closeMenu}/>
        </motion.div>}

      </AnimatePresence>

    </div>
  );
};

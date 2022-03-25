import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTransition, animated, config } from "@react-spring/web";

import Logo from '../../public/lambits-logo.jpg';

/* Using transistion function with react string plug-in. 
this allows the neon sign text to pules */ 

export const NeonLogo = function Mount() {
    const [show, set] = useState(false)
    const transitions = useTransition(show, {
      from: { opacity: .07 },
      enter: { opacity: 1 },
      leave: { opacity: .4 },
      reverse: show,
      delay: 200,
      config: config.molasses,
      onRest: () => set(!show),
    })

    useEffect(() => {
      if (show) { 
        setTimeout (() => { 
          set(true) 
      }, 200)

      }  return () => clearTimeout()
    }, [show,200]);
      

    return transitions(
            (styles, item) => item && 
            <animated.div style={styles}>
                <Image
                    src={Logo}
                    alt='Neon Light Logo'
                    width={200}
                    height={100}
                />
            </animated.div>
        
    )
  };
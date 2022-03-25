import React, { useState,useEffect } from "react";
import Image from "next/image";
import LambitsLabsSign from  '../../public/Lambits-labs-red-light.jpg';
import { useTransition, animated, config } from "@react-spring/web";

/* Using transistion function with react string plug-in. 
this allows the neon sign text to pules */ 

export const LambitsLabsNeon = function Mount() {
    const [show, set] = useState(false)
    const transitions = useTransition(show, {
      from: { opacity: .07 },
      enter: { opacity: 1 },
      leave: { opacity: .4 },
      reverse: false,
      delay: 200,
      config: config.molasses,
      onRest: () => set(!show),
    })
    useEffect(() => {
      if (!show) { 
        setTimeout (() => { 
          set(false) 
      }, 200)
      set(false)
      }  return () => clearTimeout()
    }, [set,200]);
    
      
    return transitions(
            (styles, item) => item && 
            <animated.div style={styles}>
                <Image
                    src={LambitsLabsSign}
                    alt='Neon Light Logo'
                    width={800}
                    height={300}
                />
            </animated.div>
        
    )
  }
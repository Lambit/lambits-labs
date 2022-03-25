import React, { useState, useEffect } from "react";
import { useTransition, animated, config } from "@react-spring/web";

export default function Mount() {
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
      set(!show)

    return transitions(
            (styles, item) => item && 
            <animated.div style={styles}>
            </animated.div>
        
    )
};
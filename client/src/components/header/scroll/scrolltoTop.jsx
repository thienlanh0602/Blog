import React from "react"
import { useScrollTrigger } from "@mui/material";


export default function ScrollToTop(props) {
    const {
        threshold,
        fadeIn,
        fadeOut,
        children,
        ...other
    } = {
        threshold: 0,
        fadeIn: "0.1s ease-in",
        fadeOut: "0.1s ease-out",
        ...props
    };

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: threshold,
        target: props.window ? window() : undefined
    });

    return React.cloneElement(children, {
        style: {
            boxShadow: trigger ? 'rgba(50, 59, 82, 0.1) 0px 10px 10px, rgba(50, 59, 82, 0.15) 0px 1px 10px'
            // "0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 2px 2px 0px rgba(0, 0, 0, 0.1), 0px 6px 8px 0px rgba(0, 0, 0, 0.1), 0px 5px 5px 2px rgba(50, 59, 82, 0.15)"
                : "none",
            transition: trigger ? fadeIn : fadeOut
        },
        ...other
    })

}
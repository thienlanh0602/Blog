import { Box } from "@mui/material";
import { forwardRef } from "react";
import Gif from '../../assets/gif/animation_4.gif'

const LogoAvataGif = forwardRef((() => {

    return (
        <Box component='img'
            src={Gif}
            autoPlay
            width={200}
            flexShrink
        />
    )
}))

export default LogoAvataGif;
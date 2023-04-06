import { Box, Link, useTheme } from "@mui/material";
import { forwardRef } from "react";
import { Link as Router } from "react-router-dom";
import Logo from '../../../assets/logo/logo2.png'


const LogoAvata = forwardRef((() => {
    const theme = useTheme();
    const Logoo = (
        <Box component='img'
            src={Logo}
            sx={{ width: 60, cursor: 'pointer', }} />
    )
    return (
        // <Link to='/' component={Router} sx={{ display: 'contents' }}>
        //     {logo}
        // </Link>
        <>
            {Logoo}
        </>

    )
}))


export default LogoAvata;
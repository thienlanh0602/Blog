import { Box, Link, useTheme } from "@mui/material";
import { forwardRef } from "react";
import { Link as Router } from "react-router-dom";
import Logo from '../../../assets/logo/logoBlogapp.png'


const LogoAvata = forwardRef((() => {
    const theme = useTheme();
    const logo = (
        <Box component='img'
            src={Logo}
            sx={{ width: 38, height: 38, cursor: 'pointer', }} />
    )
    return (
        <Link to='/' component={Router} sx={{ display: 'contents' }}>
            {logo}
        </Link>
    )
}))


export default LogoAvata;
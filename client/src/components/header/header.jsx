import PropTypes from 'prop-types';
import { bgBlur } from "../../util/style"
import { styled } from '@mui/material/styles'
import { AppBar, Box, Toolbar } from "@mui/material"
import ScrollToTop from "./scroll/scrolltoTop"
import LogoAvata from './logo/logo';

import Elements from './listButtonItem/navElements';
import configData from './listButtonItem/config'

const HEADER_MOBILE = 60;

const StyleRoot = styled(AppBar)(({ theme }) => ({
    ...bgBlur({ color: theme.palette.background.default }),
    boxShadow: "none",
    [theme.breakpoints.up('lg')]: {
        width: `calc(100%)`,
    },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({

    [theme.breakpoints.down('lg')]: {
        minHeight: HEADER_MOBILE,
        padding: theme.spacing(0, 3),
    },
    [theme.breakpoints.up('lg')]: {
        minHeight: HEADER_MOBILE,
        padding: theme.spacing(0, 6),
    },
}));



Header.propTypes = {
    openNav: PropTypes.func
}
export default function Header() {

    return (
        <StyleRoot>
            <ScrollToTop fadeIn={"0.1s ease-in"} fadeOut={"0.1s ease-out"}>
                <StyledToolbar>
                    <LogoAvata />
                    {/* space center */}
                    <Box sx={{ flexGrow: 1 }} /> 
                    <Elements data={configData}/>
                </StyledToolbar>
            </ScrollToTop>
        </StyleRoot>



    )
};
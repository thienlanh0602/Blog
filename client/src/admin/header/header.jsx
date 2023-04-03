import PropTypes from 'prop-types';
import { bgBlur } from "../../util/style"
import { styled } from '@mui/material/styles'
import { AppBar, Box, IconButton, Toolbar } from "@mui/material"
import { Icon } from '@iconify/react'

const HEADER_MOBILE = 60;
const WIDTH_LG = 260

const StyleRoot = styled(AppBar)(({ theme }) => ({
    ...bgBlur({ color: theme.palette.background.default }),
    boxShadow: "none",
    [theme.breakpoints.up('lg')]: {
        width: `calc(100% - ${WIDTH_LG}px)`,
    }
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({

    [theme.breakpoints.down('lg')]: {
        minHeight: HEADER_MOBILE,
        padding: theme.spacing(0, 5),
    },
    [theme.breakpoints.up('lg')]: {
        minHeight: HEADER_MOBILE,
        padding: theme.spacing(0, 10),
    },
}));

Header.propTypes = {
    openNav: PropTypes.func
}
export default function Header({ openNav }) {

    return (
        <StyleRoot>
            <StyledToolbar>
                <IconButton
                    onClick={openNav}
                    sx={{
                        mr: 1,
                        color: 'text.primary',
                        display: { lg: 'none' },
                    }}
                >
                    <Box component={Icon}>
                        <Icon icon={"eva:menu-2-fill"} />
                    </Box>
                </IconButton>
                <Box
                    flexGrow={1}
                    textAlign={'center'}
                    sx={{ color: 'black' }}
                >
                    Admin
                </Box>
            </StyledToolbar>
        </StyleRoot>
    )
};
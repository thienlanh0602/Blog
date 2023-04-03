import { styled } from "@mui/material/styles"
import Header from "../header/header"
import { useState } from "react"
import Nav from "../nav/nav"
import { Outlet } from "react-router-dom"

const APP_BAR_MOBILE = 90;
const WIDTH_NAV = 280;


const StyleRoot = styled('div')({
    display: 'flex',
    minHeight: '100%',
    flexDirection: 'column',
    minWidth: '100%',
    overflow: 'hidden',
})

const Main = styled('div')(({ theme }) => ({
    flexGrow: 1,
    paddingTop: APP_BAR_MOBILE,
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
        paddingTop: APP_BAR_MOBILE,
        paddingLeft: WIDTH_NAV + 180,
        paddingRight: theme.spacing(20)
    },
    [theme.breakpoints.down('lg')]: {
        paddingTop: APP_BAR_MOBILE,
        paddingLeft: theme.spacing(10),
        paddingRight: theme.spacing(10)
    }
}))


export default function LayoutAdmin() {
    const [open, setOpen] = useState(false)
    return (
        <StyleRoot>
            <Header openNav={() => setOpen(true)} />
            <Nav open={open} onClose={() => setOpen(false)} />
            <Main>
                <Outlet />
            </Main>


        </StyleRoot>
    )
}
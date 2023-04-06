import Header from '../components/header/header'
import { styled } from '@mui/material/styles'
import Content from '../components/homepage/homepage'
import { Outlet } from 'react-router-dom';


const APP_BAR_MOBILE = 90;


const StyleRoot = styled('div')({
    display: 'flex',
    minHeight: '100%',
    flexDirection: 'column',
    minWidth: '100%',
    overflow: 'hidden'
})

const Main = styled('div')(({ theme }) => ({
    flexGrow: 1,
    paddingTop: APP_BAR_MOBILE,
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
        paddingTop: APP_BAR_MOBILE,
        paddingLeft: theme.spacing(20),
        paddingRight: theme.spacing(20)
    },
    [theme.breakpoints.down('lg')]: {
        paddingTop: APP_BAR_MOBILE,
        paddingLeft: theme.spacing(10),
        paddingRight: theme.spacing(10)
    }
}))

export default function Layout() {

    return (
        <StyleRoot>
            <Header />
            <Main>
                <Outlet />
            </Main>
        </StyleRoot>
    )
}
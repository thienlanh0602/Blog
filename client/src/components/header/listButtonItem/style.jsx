import { ListItemButton } from "@mui/material"
import { styled } from '@mui/material/styles'

//create style list button header
export const ListButtonStyle = styled(ListItemButton)(({ theme }) => ({
    textTransform: "capitalize",
    '&:hover': {
        backgroundColor: 'transparent'
    },
    '&.active': {
        backgroundColor: 'transparent',
        color: '#6ECCAF'
    },
    color: 'black',
    [theme.breakpoints.up('sm')]: {
        paddingLeft: 80,
    },
    [theme.breakpoints.down('lg')]: {
        paddingLeft: 50,
    },
    [theme.breakpoints.down('sm')]: {
        paddingLeft: 10,
        fontSize:15
    },
}))
import { ListItemText, Stack } from "@mui/material"
import { NavLink } from "react-router-dom";
import { ListButtonStyle } from "../listButtonItem/style";

export default function Elements({ data = [], ...other }) {
    return (
        <Stack
            direction="row"
            alignItems="center"
            spacing={{ xs: 0.5, sm: 1, }} {...other}
        >
            {data.map((item) => (
                <HeaderElements key={item.name} item={item} />
            ))}
        </Stack>
    )
    //create funtion list item button header
    function HeaderElements({ item }) {
        const { name, path } = item
        return (
            <ListButtonStyle
                disableRipple
                component={NavLink}
                to={path}
                >
                <ListItemText
                    disableTypography
                    primary={name}
                />
            </ListButtonStyle>
        )
    }
}

    // const [check, setCheck] = useState([])

    // return (
    //     <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1, }}>

    //         {listButtons.map((listButton, i) => (
    //             <ButtonStyle key={listButton.name}
    //                 component={NavLink}
    //                 to={check}
    //                 variant="text"
    //                 disableRipple
    //                 // style={check === listButton.path ? {  } : null}
    //                 onClick={() => setCheck(listButton.path)}>
    //                 {listButton.name}
    //             </ButtonStyle>
    //         ))}
    //     </Stack>
    // )




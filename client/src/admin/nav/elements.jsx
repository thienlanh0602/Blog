import { Box } from "@mui/material"
import LogoAvata from "../../assets/logo/logoBlogapp.png"

export default function Elements() {

    return (
        <Box display={"flex"}
            flexDirection={"column"}
        >
            <Box component={"img"}
                src={LogoAvata}
                sx={{ width: "16%", ml: 4, mt: 4 }}
            />
            <Box component={"img"}
                src={LogoAvata}
                sx={{ width: "16%", ml: 4, mt: 4 }}
            />
        </Box>
    )
}
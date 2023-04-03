import { Box, Drawer, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";
import Elements from "./elements";
const WIDTH_NAV = 280


export default function Nav({ open, onClose }) {
    const theme = useTheme();
    const LG = useMediaQuery(theme.breakpoints.up("lg"))
    return (
        <Box component={"nav"}
            width={WIDTH_NAV}
            color={"black"}
        >
            {LG ? (
                <Drawer
                    open
                    variant="permanent"
                    PaperProps={{
                        sx: {
                            width: WIDTH_NAV,
                            bgcolor: 'background.default',
                            borderRightStyle: 'dashed',
                        },
                    }}
                >
                    <Elements/>
                </Drawer>
            ) : (
                <Drawer
                    sx={{fontFamily: "Kanit"}}
                    open={open}
                    onClose={onClose}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    PaperProps={{
                        sx: { width: WIDTH_NAV },
                        elevation: 0,
                    }}
                    componentsProps={{
                        backdrop: {
                            style: {
                                backgroundColor: '#194839',
                                opacity: 0.15
                            }
                        }
                    }}
                >
                    <Elements/>
                </Drawer>)}
        </Box>
    )
}
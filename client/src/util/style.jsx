import { alpha } from '@mui/material/styles'

export function bgBlur(prop) {
    const color = prop?.color || "black";
    const blur = prop?.blur || 6;
    const opacity = prop?.opacity || 0.8;

    return {
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blue(${blur}px)`,
        backgroundColor: alpha(color, opacity)
    }

}

import { yellow } from "@material-ui/core/colors";
import { createTheme } from "@mui/material/styles";

const appTheme = createTheme({
    pallete: {
        primary: yellow,
    },
    spacing: 8,
});

export default appTheme;
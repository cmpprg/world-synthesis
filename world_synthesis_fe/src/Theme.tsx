import { colors } from "@mui/material";
import { createTheme, Opacity } from "@mui/material/styles";
import { colorOpacity } from "utils/colorOpacityUtils";

// Palette
let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: colors.blue[300],
      main: colors.blue[500],
      dark: colors.blue[700],
      contrastText: colors.common.white,
    },
    secondary: {
      light: colors.green[300],
      main: colors.green[500],
      dark: colors.green[700],
      contrastText: colors.common.white,
    },
  },
});

// Typography
theme = createTheme(theme, {
  typography: {
    fontFamily: "Roboto",
    h1: {
      fontSize: "4rem",
    },
    h2: {
      fontSize: "3rem",
    },
    h3: {
      fontSize: "2rem",
    },
    h4: {
      fontSize: "1.5rem",
    },
    h5: {
      fontSize: "1.25rem",
    },
    h6: {
      fontSize: "1rem",
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.875rem",
    },
  },
});

console.log(theme.palette.primary.main);
// Component Defaults
theme = createTheme(theme, {
  components: {
    MuiDialog: {
      styleOverrides: {
        container: {
          paddingBottom: "1rem",
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
          backgroundColor: colorOpacity(theme.palette.primary.main, "10%"),
        },
      },
    },
  },
});

const Theme = theme;
export default Theme;

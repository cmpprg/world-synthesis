import { CssBaseline, ThemeProvider } from "@mui/material";
import Theme from "Theme";
import Homepage from "pages/Homepage";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Homepage />
    </ThemeProvider>
  );
};

export default App;

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

//https://mui.com/material-ui/customization/theming/#typescript

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  status: {
    danger: orange[500],
  },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AppThemeProvider = ({ children }: any) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;

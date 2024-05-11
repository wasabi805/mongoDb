import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import { useMediaQuery, Box } from "@mui/material";

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

export const AppContainer = styled(Box)(({ theme }) => {
  const { breakpoints } = theme;

  const isMobile = !useMediaQuery(breakpoints.up("sm"));
  console.log("what is breakpoints", breakpoints, isMobile);
  // const isTablet = useMediaQuery(breakpoints.up("md"));

  return `
        height: 100vh;
        position: relative;
    `;
});

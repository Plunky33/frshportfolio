import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {},
  fonts: {
    heading: 'IBM Plex Sans,-apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    body: 'IBM Plex Sans, -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
  },
  fontSizes: {},
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    '2x1': "1440px"
  },
});

const theme = extendTheme({ customTheme });

export default customTheme;
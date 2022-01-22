import { extendTheme } from '@chakra-ui/react';
// import "@fontsource/ibm-plex-sans";
// import "@fontsource/inter";
import "@fontsource/blackout-sunrise"
import "@fontsource/lato"
import "@fontsource/mulish"

export const theme = extendTheme({
    fonts: {
      heading: 'Mulish, -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      body: 'Lato, -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      fourohfour: 'Blackout Sunrise, -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    },
    components: {
      Stack: {
        sizes: {
          '2xl': {
              marginTop: "15rem !important"
          },
          xl: {
              marginTop: "15rem !important"
          },
          lg: {
                marginTop: "10rem !important"
          },
          md: {
              marginTop: "0rem"
          },
          sm: {
              marginTop: "0rem"
          },
            },
        },
      },
  })
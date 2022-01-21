import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
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
});

const theme = extendTheme({ customTheme });

export default customTheme;
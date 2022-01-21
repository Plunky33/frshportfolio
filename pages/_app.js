// import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { AnimatePresence } from 'framer-motion';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

import { ButtonProvider } from '../context/ButtonContext'

// import "@fontsource/ibm-plex-sans";
// import "@fontsource/inter";
import "@fontsource/lato"
import "@fontsource/mulish"


const theme = extendTheme({
  fonts: {
    heading: 'Mulish, -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    body: '"Lato", -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
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


const App = ( { Component, pageProps }) => {

	return (
	<AnimatePresence exitBeforeEnter>
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode="dark" />
			<ButtonProvider>
				<NextNProgress
					color="#4299E1"
					startPosition={0.3}
				/>
				<Component {...pageProps} />
			</ButtonProvider>
		</ChakraProvider>
	</AnimatePresence>
	)
};

export default App;

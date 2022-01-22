import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import "@fontsource/blackout-sunrise"
import "@fontsource/lato"

import NextNProgress from 'nextjs-progressbar';
import { AnimatePresence } from 'framer-motion';
import { ChakraProvider, extendTheme, ColorModeScript } from '@chakra-ui/react';
import { ButtonProvider } from '../context/ButtonContext'

import { Fonts } from "../src/theme/Fonts";

const theme = extendTheme({
  fonts: {
    heading: "Open Sans",
    body: "Lato",
	notfound: "Open Sans"
  }
});

const App = ( { Component, pageProps }) => {

	return (
		<AnimatePresence exitBeforeEnter>
		   <ChakraProvider theme={theme} resetCSS>
		 {/* <Fonts /> */}
			<ColorModeScript />
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

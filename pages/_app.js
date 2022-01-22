// import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { AnimatePresence } from 'framer-motion';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { theme } from '../theme/styles'
import { ButtonProvider } from '../context/ButtonContext'

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

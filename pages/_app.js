import '@fontsource/blackout-sunrise';
import '@fontsource/lato';
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/700.css';

import NextNProgress from 'nextjs-progressbar';
import { AnimatePresence } from 'framer-motion';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { ButtonProvider } from '../context/ButtonContext';
import customTheme from '../src/theme/customTheme';

const App = ({ Component, pageProps }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <ChakraProvider theme={customTheme} resetCSS>
        <ColorModeScript />
        <ButtonProvider>
          <NextNProgress color="#4299E1" startPosition={0.3} />
          <Component {...pageProps} />
        </ButtonProvider>
      </ChakraProvider>
    </AnimatePresence>
  );
};

export default App;

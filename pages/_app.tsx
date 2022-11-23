import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Provider } from "react-redux";
import store from "../store/index";

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })



export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}><ChakraProvider theme={theme}><Component {...pageProps} /></ChakraProvider></Provider>
}

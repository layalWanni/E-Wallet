import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

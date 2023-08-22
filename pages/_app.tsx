import Footer from '../components/Footer'
import Header from '../components/Header'
import { CartProvider } from '../components/contexts/CartContext'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <CartProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </CartProvider>
  </>
}

export default MyApp

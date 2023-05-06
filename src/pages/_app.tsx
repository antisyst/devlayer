import '@/styles/globals.scss'
import '@/styles/navigation.scss'
import type { AppProps } from 'next/app';
import GlobalStyle from '@/GlobalStyle';



export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

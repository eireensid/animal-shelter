import '../styles/main.scss'
import '../styles/variables.scss'

export default function MyApp({Component, pageProps}) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
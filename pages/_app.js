import '~/styles/main.scss'
import Head from 'next/head'

export default function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" type="image/x-icon" href="/img/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

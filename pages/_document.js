import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@700&family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet" />
          <meta name="google-site-verification" content="b3UAoyiTwEw7EudZmbTujWnN0OkxAw3K2y5Y_uJW1tM" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
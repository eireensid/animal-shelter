import Link from 'next/link'
import Head from 'next/head'

export function MainLayout({children, title='Next App'}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="next, react,javascript" />
        <meta name="description" content="This is next tutorial" />
        <meta charSet="utf-8" />
      </Head>
      <nav>        
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <h1></h1>
      </nav>
      <main>
        {children}
      </main>
      <style jsx>{`
        nav {
          position: fixed;
          height: 60px;
          left: 0;
          top: 0;
          right: 0;
          background: darkblue;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        nav a {
          color: white;
          text-decoration: none;
        }
        main {
          margin-top: 60px;
        }
      `}</style>
    </>
  )
}
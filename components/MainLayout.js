import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/MainLayout.module.scss'

export function MainLayout({children, title='Animal shelter'}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="next, react,javascript" />
        <meta name="description" content="This is next tutorial" />
        <meta charSet="utf-8" />
      </Head>
      <header>
        <nav className={styles.nav}>   
          <div className={styles.container}>
            <div className="styles['logo-wrapper']">
              <Image src="/img/logo.svg" alt="logo" width="100%" height="59" />
            </div>
            <div className={styles['menu-wrapper']}>
              <Image src="/img/burger.svg" alt="menu" width="19" height="13" />
            </div>
          </div>     
        </nav>
      </header>
      <main>
        {children}
      </main>
    </>
  )
}
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
        <div className={styles.headerBlock}>
          <div className={styles.logoWrapperHeader}>
            <img className={styles.logoHeader} src="/img/logo.svg" alt="лого"/>
          </div>
          <nav className={styles.menuWrapper}>
            <Link href="/"><a>О приюте</a></Link>
            <Link href="/"><a>Питомцы</a></Link>
            <Link href="/"><a>Приветы из дома</a></Link>
            <Link href="/"><a>Отчеты</a></Link>
          </nav>
          <div className={styles.btnWrapper}>
            <button className={styles.donationBtnHeader}>Пожертвовать</button>
          </div>
        </div>   
      </header>
      <main>
        {children}
      </main>
      <footer>
        <div className={styles.footerBlock}>
          <nav className={styles.aboutShelter}>
            <img className={styles.logoFooter} src="/img/logo.svg" alt="лого"/>
            <h4>О приюте</h4>
            <ul>
              <li><Link href="/"><a>Основные нужды Теремка</a></Link></li>
              <li><Link href="/"><a>Опекунство и адаптация</a></Link></li>
              <li><Link href="/"><a>Прогулки с собаками</a></Link></li>
              <li><Link href="/"><a>Правила посещения приюта</a></Link></li>
              <li><Link href="/"><a>Приветы из дома</a></Link></li>
              <li><Link href="/"><a>Отчеты</a></Link></li>
            </ul>
          </nav>
          <nav className={styles.ourPets}>
            <h4>Наши питомцы</h4>
            <ul>
              <li><Link href="/"><a>Кошки</a></Link></li>
              <li><Link href="/"><a>Собаки</a></Link></li>
              <li><Link href="/"><a>Ищут дом</a></Link></li>
              <li><Link href="/"><a>Проходят лечение</a></Link></li>
              <li><Link href="/"><a>Нужен опекун</a></Link></li>
              <li><Link href="/"><a>Нужна адаптация</a></Link></li>
              <li><Link href="/"><a>Малыши</a></Link></li>
            </ul>
          </nav>
          <nav className={styles.contacts}>
            <h4>Контакты</h4>
            <p className={styles.phone}><a href="#">+7 (921) 432-00-35</a></p>
            <p className={styles.address}>г. Санкт-Петербург,<br/>поселок под Гатчиной</p>
            <h4>Помочь с пиаром</h4>
            <div className={styles.socialsBlockFooter}>
              <img src="/img/whatsapp.svg" alt="what's app"/>
              <img src="/img/vk.svg" alt="vk"/>
              <img src="/img/instagram.svg" alt="instagram"/>
            </div>
          </nav>
        </div>
      </footer>
    </>
  )
}
import Link from 'next/link'
import Head from 'next/head'
import BankCardModal from '~/components/BankCardModal'
import SocialBtns from '~/components/SocialBtns'
import WebsiteTeam from '~/components/WebsiteTeam'
import styles from '~/styles/MainLayout.module.scss'

export function MainLayout({children, title='Теремок'}) {
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
            <Link href="/"><img className={styles.logoHeader} src="/img/logo.svg" alt="лого"/></Link>
          </div>
          <nav className={styles.menuWrapper}>
            <a className={styles.menuAboutLink}>О приюте</a>
            <div className={`${styles.menuDropdown} ${styles.menuAboutDropdown}`}>
              <ul className={styles.menuDropdownUl}>
                <li><Link href="/basic-needs-of-teremok"><a>Основные нужды Теремка</a></Link></li>
                <li><Link href="/guardianship-and-adaptation"><a>Опекунство и адаптация</a></Link></li>
                <li><Link href="/walks-with-dogs"><a>Прогулки с собаками</a></Link></li>
                <li><Link href="/rules-for-shelter-visiting"><a>Правила посещения приюта</a></Link></li>
                <li><Link href="/hellos-from-homes"><a>Приветы из дома</a></Link></li>
                <li><Link href="/shelter-reports"><a>Отчеты</a></Link></li>
              </ul>
            </div>
            <a className={styles.menuPetsLink}>Питомцы</a>
            <div className={`${styles.menuDropdown} ${styles.menuPetsDropdown}`}>
              <ul className={styles.menuDropdownUl}>
                <li><Link href="/cats"><a>Кошки</a></Link></li>
                <li><Link href="/dogs"><a>Собаки</a></Link></li>
                <li><Link href="/basic-needs-of-teremok"><a>Ищут дом</a></Link></li>
                <li><Link href="/undergo-treatment"><a>Проходят лечение</a></Link></li>
                <li><Link href="/need-guardian"><a>Нужен опекун</a></Link></li>
                <li><Link href="/need-adoptation"><a>Нужна адаптация</a></Link></li>
                <li><Link href="/baby-pets"><a>Малыши</a></Link></li>
              </ul>
            </div>
            <Link href="/hellos-from-homes"><a>Приветы из дома</a></Link>
            <Link href="/shelter-reports"><a>Отчеты</a></Link>
          </nav>

          {/* Mobile menu */}
          <nav className={styles.menuWrapperBurger}>
            <img className={styles.burger} src="/img/burger.svg" alt="меню"/>
          </nav>

          <div className={styles.btnWrapper}>
            <BankCardModal/>
          </div>
        </div>   
      </header>
      <main>
        {children}
      </main>
      <footer>
        <div className={styles.footerBlock}>
          <img className={styles.logoFooter} src="/img/logo.svg" alt="лого"/>
          <div className={styles.navBlock}>
            <nav className={styles.aboutShelter}>
              <h4>О приюте</h4>
              <ul>
                <li><Link href="/basic-needs-of-teremok"><a>Основные нужды Теремка</a></Link></li>
                <li><Link href="/guardianship-and-adaptation"><a>Опекунство и адаптация</a></Link></li>
                <li><Link href="/walks-with-dogs"><a>Прогулки с собаками</a></Link></li>
                <li><Link href="/rules-for-shelter-visiting"><a>Правила посещения приюта</a></Link></li>
                <li><Link href="/hellos-from-homes"><a>Приветы из дома</a></Link></li>
                <li><Link href="/shelter-reports"><a>Отчеты</a></Link></li>
              </ul>
            </nav>
            <nav className={styles.ourPets}>
              <h4>Наши питомцы</h4>
              <ul>
                <li><Link href="/cats"><a>Кошки</a></Link></li>
                <li><Link href="/dogs"><a>Собаки</a></Link></li>
                <li><Link href="/looking-for-home"><a>Ищут дом</a></Link></li>
                <li><Link href="/undergo-treatment"><a>Проходят лечение</a></Link></li>
                <li><Link href="/need-guardian"><a>Нужен опекун</a></Link></li>
                <li><Link href="/need-adoptation"><a>Нужна адаптация</a></Link></li>
                <li><Link href="/baby-pets"><a>Малыши</a></Link></li>
              </ul>
            </nav>
            <nav className={styles.contacts}>
              <h4>Контакты</h4>
              <p className={styles.phone}><a href="tel:+79214320035">+7 (921) 432-00-35</a></p>
              <p className={styles.address}>г. Санкт-Петербург,<br/>поселок под Гатчиной</p>
              <h4 className={styles.prHelp}>Помочь с пиаром</h4>
              <div className={styles.socialsBlockFooter}>
                <SocialBtns/>
              </div>
            </nav>
          </div>

          <div>
            <WebsiteTeam/>
          </div>
        </div>
      </footer>
    </>
  )
}
import Link from 'next/link'
import useDropdown from '~/hooks/useDropdown'
import BankCardModal from '~/components/BankCardModal'
import styles from '~/styles/components/MobileMenu.module.scss'

export default function MobileMenu({closeMenu}) {
  const { dropdownStyles, openDropdownClicks, wrapperRefs } = useDropdown(2)

  return <>
    <div className={styles.mobileMenuBlock}>
      <div className={styles.menuAndBtnBlock}>
        <nav className={styles.menuWrapperMobile}>
          <div ref={wrapperRefs[0]}>
            <a onClick={openDropdownClicks[0]} className={styles.menuAboutLink}>О приюте</a>
            <div style={dropdownStyles[0]} className={styles.menuDropdownMobile}>
              <ul className={styles.menuDropdownMobileUl}>
                <li><Link href="/basic-needs-of-teremok"><a>Основные нужды Теремка</a></Link></li>
                <li><Link href="/guardianship-and-adaptation"><a>Опекунство и адаптация</a></Link></li>
                <li><Link href="/walks-with-dogs"><a>Прогулки с собаками</a></Link></li>
                <li><Link href="/rules-for-shelter-visiting"><a>Правила посещения приюта</a></Link></li>
                <li><Link href="/hellos-from-homes"><a>Приветы из дома</a></Link></li>
                <li><Link href="/shelter-reports"><a>Отчеты</a></Link></li>
              </ul>
            </div>
          </div>
          <div ref={wrapperRefs[1]}>
            <a onClick={openDropdownClicks[1]} className={styles.menuPetsLink}>Питомцы</a>
            <div style={dropdownStyles[1]} className={styles.menuDropdownMobile}>
              <ul className={styles.menuDropdownMobileUl}>
                <li><Link href="/cats"><a>Кошки</a></Link></li>
                <li><Link href="/dogs"><a>Собаки</a></Link></li>
                <li><Link href="/basic-needs-of-teremok"><a>Ищут дом</a></Link></li>
                <li><Link href="/undergo-treatment"><a>Проходят лечение</a></Link></li>
                <li><Link href="/need-guardian"><a>Нужен опекун</a></Link></li>
                <li><Link href="/need-adoptation"><a>Нужна адаптация</a></Link></li>
                <li><Link href="/baby-pets"><a>Малыши</a></Link></li>
              </ul>
            </div>
          </div>
          <Link href="/hellos-from-homes"><a>Приветы из дома</a></Link>
          <Link href="/shelter-reports"><a>Отчеты</a></Link>
        </nav>

        <div className={styles.btnWrapper}>
          <BankCardModal parent={"mobileMenu"}/>
        </div>
      </div>
      <div className={styles.closeAndSocialsBlock}>
        <div className={styles.mobileMenuClose}>
          <button className={styles.btnClose} onClick={closeMenu}><img src="/img/close.png" alt="закрыть"/></button>
        </div>
        <div className={styles.socialsWrapper}>
          <a href="https://wa.me/+79214320035" target="_blank"><img src="/img/whatsapp.svg" alt="what's app"/></a>
          <a href="https://vk.com/club188970721" target="_blank"><img src="/img/vk.svg" alt="vk"/></a>
          <a href="https://www.instagram.com/teremok_priyut/?hl=ru" target="_blank"><img src="/img/instagram.svg" alt="instagram"/></a>
        </div>
      </div>
    </div>
  </>
}
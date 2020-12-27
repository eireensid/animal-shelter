import Link from 'next/link'
import Head from 'next/head'
import {useState} from 'react'
import MobileMenu from '~/components/MobileMenu'
import BankCardModal from '~/components/BankCardModal'
import SocialBtns from '~/components/SocialBtns'
import WebsiteTeam from '~/components/WebsiteTeam'
import VisitingRulesModal from '~/components/VisitingRulesModal'
import styles from '~/styles/MainLayout.module.scss'

export function MainLayout({children, title='Теремок'}) {
  const [menuStyle, setMenuStyle] = useState({display: "none"})
  const openMenu = () => {
    if (menuStyle.display === "none") {
      setMenuStyle({display: "block"})
    } else {
      setMenuStyle({display: "none"})
    }
  }
  const closeMenu = () => {
    setMenuStyle({display: "none"})
  }


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
            {/* <Link href="/"><img className={styles.logoHeader} src="/img/logo.svg" alt="лого"/></Link> */}
            <Link href="/">
              <svg width="82" height="72" viewBox="0 0 353 283" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.6104 237.789C28.0404 237.929 28.6904 238.099 29.5704 238.289C30.4504 238.479 31.4404 238.629 32.5304 238.749C33.6204 238.869 34.6404 238.929 35.6004 238.929L27.6204 239.639V237.789H27.6104ZM66.7504 238.929V241.069H27.6104V238.929H66.7504ZM31.9604 240.929V241.069C30.8704 241.119 30.0004 241.489 29.3604 242.169C28.7204 242.859 28.4004 243.699 28.4004 244.699V245.839H27.6204V240.919H31.9604V240.929ZM45.0004 277.209V281.769H39.8004V281.059C39.8504 281.059 40.1304 281.059 40.6604 281.059C41.8004 281.059 42.7704 280.679 43.5804 279.919C44.3904 279.159 44.8204 278.259 44.8604 277.209H45.0004ZM49.5004 239.219V281.779H44.8704V239.219H49.5004ZM49.2804 277.209H49.4904C49.5404 278.259 49.9604 279.159 50.7704 279.919C51.5804 280.679 52.5504 281.059 53.6904 281.059H54.4704V281.769H49.2704V277.209H49.2804ZM66.7504 237.789V239.639L58.7704 238.929C59.7204 238.929 60.7304 238.869 61.8004 238.749C62.8704 238.629 63.8504 238.479 64.7604 238.289C65.6504 238.099 66.3204 237.929 66.7504 237.789ZM66.7504 240.929V245.849H65.9704V244.709C65.9704 243.709 65.6504 242.869 65.0104 242.179C64.3704 241.489 63.5004 241.119 62.4104 241.079V240.939H66.7504V240.929Z" fill="black"/>
                <path d="M76.9399 243.499H76.7999C76.7499 242.409 76.3499 241.499 75.5899 240.789C74.8299 240.079 73.8499 239.719 72.6699 239.719H71.6699V238.999H77.8699L76.9399 243.499ZM76.9399 277.209L77.8699 281.769H71.6699V281.059H72.6699C73.8599 281.059 74.8299 280.679 75.5899 279.919C76.3499 279.159 76.7499 278.259 76.7999 277.209H76.9399ZM81.3599 238.999V281.769H76.7999V238.999H81.3599ZM100.47 238.999V241.209H81.2199V238.999H100.47ZM97.1899 259.319V261.459H81.2199V259.319H97.1899ZM100.54 279.569L100.4 281.779H81.2199V279.569H100.54ZM104.53 271.579L100.61 281.769H89.7699L92.1899 279.559C94.5699 279.559 96.4799 279.219 97.9299 278.529C99.3799 277.839 100.56 276.889 101.46 275.679C102.36 274.469 103.15 273.099 103.81 271.579H104.53ZM100.47 237.859V239.709L92.3399 238.999C93.8099 238.999 95.3799 238.869 97.0499 238.609C98.7099 238.349 99.8499 238.099 100.47 237.859ZM97.1899 255.399V259.459H93.4799V259.319C94.4799 259.319 95.2099 259.019 95.6899 258.429C96.1599 257.839 96.3999 257.139 96.3999 256.329V255.399H97.1899ZM97.1899 261.319V265.379H96.4099V264.449C96.4099 263.639 96.1699 262.939 95.6999 262.349C95.2199 261.759 94.4899 261.459 93.4899 261.459V261.319H97.1899ZM100.47 240.999V245.919H99.6899V244.849C99.6899 243.849 99.3699 242.999 98.7299 242.279C98.0899 241.559 97.2199 241.209 96.1299 241.209V240.999H100.47Z" fill="black"/>
                <path d="M115.791 243.5H115.651C115.601 242.41 115.201 241.5 114.441 240.79C113.681 240.08 112.731 239.72 111.591 239.72H110.591V239H116.651L115.791 243.5ZM115.791 277.21L116.651 281.77H110.591V281.06H111.591C112.731 281.06 113.681 280.68 114.441 279.92C115.201 279.16 115.601 278.26 115.651 277.21H115.791ZM120.141 239V281.77H115.581V239H120.141ZM119.931 277.21H120.141C120.191 278.26 120.591 279.16 121.351 279.92C122.111 280.68 123.061 281.06 124.201 281.06H125.131L125.201 281.77H119.071L119.931 277.21ZM128.481 239C130.711 239 132.721 239.26 134.501 239.78C136.281 240.3 137.801 241.06 139.061 242.06C140.321 243.06 141.281 244.27 141.951 245.7C142.621 247.13 142.951 248.74 142.951 250.55C142.951 252.55 142.471 254.4 141.521 256.11C140.571 257.82 139.251 259.22 137.561 260.32C135.871 261.41 133.961 262.08 131.821 262.32C132.631 262.65 133.571 263.39 134.641 264.53C135.711 265.67 136.621 266.79 137.391 267.88C138.621 269.54 139.731 270.98 140.701 272.19C141.671 273.4 142.641 274.55 143.591 275.65C144.591 276.74 145.501 277.69 146.341 278.5C147.171 279.31 148.071 279.94 149.051 280.39C150.021 280.84 151.151 281.07 152.441 281.07V281.78H150.231C147.621 281.78 145.471 281.45 143.781 280.78C142.091 280.11 140.731 279.3 139.681 278.32C138.631 277.35 137.731 276.41 136.971 275.5C136.781 275.26 136.341 274.66 135.651 273.68C134.961 272.71 134.211 271.65 133.401 270.51C132.591 269.37 131.861 268.34 131.191 267.41C130.521 266.48 130.121 265.92 129.981 265.73C129.031 264.49 127.941 263.39 126.701 262.42C125.461 261.45 124.161 260.96 122.781 260.96V260.25C124.301 260.3 125.661 260.3 126.841 260.25C128.171 260.2 129.501 260.1 130.831 259.93C132.161 259.76 133.411 259.25 134.571 258.4C135.731 257.54 136.651 256.12 137.321 254.12C137.511 253.6 137.651 252.98 137.751 252.27C137.841 251.56 137.871 250.82 137.821 250.06C137.771 248.73 137.521 247.54 137.071 246.5C136.621 245.46 135.981 244.55 135.151 243.79C134.321 243.03 133.331 242.44 132.191 242.01C131.051 241.58 129.771 241.34 128.341 241.3C126.111 241.21 124.161 241.18 122.491 241.23C120.831 241.28 119.991 241.28 119.991 241.23C119.991 241.18 119.931 240.98 119.811 240.62C119.691 240.26 119.511 239.73 119.281 239.02H128.481V239Z" fill="black"/>
                <path d="M160.561 243.499H160.421C160.371 242.409 159.971 241.499 159.211 240.789C158.451 240.079 157.471 239.719 156.291 239.719H155.291V238.999H161.491L160.561 243.499ZM160.561 277.209L161.491 281.769H155.291V281.059H156.291C157.481 281.059 158.451 280.679 159.211 279.919C159.971 279.159 160.371 278.259 160.421 277.209H160.561ZM164.981 238.999V281.769H160.421V238.999H164.981ZM184.091 238.999V241.209H164.841V238.999H184.091ZM180.811 259.319V261.459H164.841V259.319H180.811ZM184.161 279.569L184.021 281.779H164.841V279.569H184.161ZM188.151 271.579L184.231 281.769H173.391L175.811 279.559C178.191 279.559 180.101 279.219 181.551 278.529C183.001 277.839 184.181 276.889 185.081 275.679C185.981 274.469 186.771 273.099 187.431 271.579H188.151ZM184.091 237.859V239.709L175.961 238.999C177.431 238.999 179.001 238.869 180.671 238.609C182.331 238.349 183.471 238.099 184.091 237.859ZM180.811 255.399V259.459H177.101V259.319C178.101 259.319 178.831 259.019 179.311 258.429C179.781 257.839 180.021 257.139 180.021 256.329V255.399H180.811ZM180.811 261.319V265.379H180.031V264.449C180.031 263.639 179.791 262.939 179.321 262.349C178.841 261.759 178.111 261.459 177.111 261.459V261.319H180.811ZM184.091 240.999V245.919H183.311V244.849C183.311 243.849 182.991 242.999 182.351 242.279C181.711 241.559 180.841 241.209 179.751 241.209V240.999H184.091Z" fill="black"/>
                <path d="M198.27 276.998V281.778H190.86V281.068H191.93C193.17 281.068 194.25 280.708 195.17 279.998C196.09 279.288 196.63 278.288 196.77 277.008H198.27V276.998ZM202.34 238.008H203.05L204.48 242.218L200.06 281.778H196.14L202.34 238.008ZM200.41 278.068C200.36 278.778 200.53 279.458 200.91 280.098C201.29 280.738 202 281.088 203.05 281.128H204.05V281.768H199.99V278.058H200.41V278.068ZM203.05 238.008L222.44 275.288L220.8 282.778L201.69 245.848L203.05 238.008ZM240.05 238.008L240.69 242.638L224.01 275.498C223.3 277.118 222.75 278.478 222.37 279.598C221.99 280.718 221.7 281.768 221.51 282.768H220.8L219.8 278.278L240.05 238.008ZM240.69 238.008L247.11 281.778H241.69L237.06 245.918L240.05 238.008H240.69ZM241.19 278.068H241.69V281.778H237.56V281.138H238.63C239.72 281.088 240.45 280.738 240.8 280.068C241.15 279.398 241.28 278.738 241.19 278.068ZM244.96 276.998H246.39C246.58 278.278 247.15 279.278 248.1 279.988C249.05 280.698 250.12 281.058 251.31 281.058H252.38V281.768H244.97V276.998H244.96Z" fill="black"/>
                <path d="M280.47 238.008C283.8 238.008 286.92 238.538 289.84 239.608C292.76 240.678 295.33 242.208 297.54 244.208C299.75 246.208 301.47 248.568 302.71 251.298C303.95 254.028 304.56 257.058 304.56 260.388C304.56 263.718 303.94 266.748 302.71 269.478C301.47 272.208 299.75 274.578 297.54 276.568C295.33 278.558 292.76 280.098 289.84 281.168C286.92 282.238 283.79 282.768 280.47 282.768C277.14 282.768 274.03 282.228 271.13 281.168C268.23 280.098 265.68 278.568 263.47 276.568C261.26 274.568 259.54 272.208 258.3 269.478C257.06 266.748 256.45 263.718 256.45 260.388C256.45 257.058 257.07 254.028 258.3 251.298C259.54 248.568 261.26 246.198 263.47 244.208C265.68 242.208 268.23 240.678 271.13 239.608C274.03 238.538 277.14 238.008 280.47 238.008ZM280.47 280.638C283.99 280.638 287.17 279.778 290.02 278.068C292.87 276.358 295.13 273.978 296.79 270.938C298.45 267.898 299.29 264.378 299.29 260.388C299.29 256.348 298.46 252.818 296.79 249.798C295.13 246.778 292.87 244.418 290.02 242.708C287.17 240.998 283.98 240.138 280.47 240.138C277 240.138 273.84 240.998 270.99 242.708C268.14 244.418 265.88 246.788 264.22 249.798C262.56 252.818 261.72 256.348 261.72 260.388C261.72 264.378 262.55 267.898 264.22 270.938C265.88 273.978 268.14 276.358 270.99 278.068C273.84 279.778 277 280.638 280.47 280.638Z" fill="black"/>
                <path d="M317.18 243.57H317.04C316.99 242.48 316.56 241.56 315.76 240.82C314.95 240.08 313.981 239.72 312.841 239.72H311.98V239H317.18V243.57ZM317.18 277.21V281.77H311.98V281.06H312.841C313.981 281.06 314.95 280.68 315.76 279.92C316.57 279.16 317 278.26 317.04 277.21H317.18ZM321.6 239V281.77H317.04V239H321.6ZM321.38 243.57V239H326.581V239.71C326.061 239.71 325.77 239.71 325.72 239.71C324.58 239.71 323.6 240.08 322.8 240.81C321.99 241.55 321.591 242.46 321.591 243.56H321.38V243.57ZM321.38 277.21H321.591C321.591 278.26 321.99 279.16 322.8 279.92C323.61 280.68 324.61 281.06 325.79 281.06H326.57V281.77H321.37V277.21H321.38ZM347.12 239.5L327.451 260.53H324.1L341.99 239.5H347.12ZM328.091 257.89L346.701 278.14C347.511 279.09 348.361 279.8 349.271 280.28C350.171 280.76 351.38 281.02 352.91 281.06V281.77H350.271C349.701 281.77 349 281.73 348.17 281.66C347.34 281.59 346.431 281.42 345.461 281.16C344.491 280.9 343.51 280.49 342.54 279.95C341.57 279.4 340.65 278.66 339.8 277.7C338.33 276.04 336.99 274.55 335.81 273.24C334.62 271.93 333.35 270.56 332 269.11C330.65 267.66 329.37 266.28 328.19 264.98C327 263.67 325.65 262.19 324.13 260.52L328.091 257.89ZM351.75 239V239.71H351.461C349.991 239.71 348.62 239.95 347.36 240.42C346.1 240.9 345.07 241.61 344.26 242.56L339.41 242.49C339.93 241.82 340.02 241.2 339.66 240.6C339.3 240.01 338.701 239.71 337.841 239.71H337.201V239H351.461H351.75Z" fill="black"/>
                <path d="M70.3501 92.9805C70.3501 92.9805 62.9501 106.29 66.7601 113.46C67.4501 114.75 68.7301 115.62 70.1701 115.86C73.8701 116.47 81.7201 116.49 81.4701 105.72C81.4801 105.72 82.5301 99.6205 70.3501 92.9805Z" fill="black"/>
                <path d="M67.23 89.9216C67.23 89.9216 48.41 79.6916 20.05 76.0116C20.05 76.0116 -4.09 70.4216 0.690002 76.0116C0.690002 76.0116 2.73999 80.3716 8.04999 82.5616C13.37 84.7416 39.69 101.512 44.46 106.702C49.23 111.882 56.05 116.522 53.6 126.472C51.15 136.422 48.28 147.882 54.55 166.562C60.82 185.242 70.5 190.292 76.37 193.292C82.23 196.292 95.32 201.882 112.37 194.652L121.64 190.562C121.64 190.562 100.5 176.792 102.82 157.422C102.82 157.422 100.5 145.422 116.46 131.242C116.46 131.242 129.41 122.102 145.78 119.512C162.14 116.922 172.51 113.922 191.46 120.062C210.41 126.202 217.23 146.302 220.1 149.752C222.96 153.202 228.15 165.472 248.87 184.702C269.6 203.932 283.23 198.882 285.82 195.752C285.82 195.752 273.41 189.072 269.18 166.162C264.95 143.252 267.41 139.952 255.41 120.752L232.64 89.1116C232.64 89.1116 217.39 63.9617 217.37 62.5217C217.37 62.5217 186.14 54.0717 163.78 54.0717C141.42 54.0717 134.19 52.7116 106.51 61.8416C106.51 61.8416 83.19 70.9816 71.6 89.2516C71.6 89.2516 87.69 96.7516 85.1 109.982C82.51 123.212 69.42 120.212 69.42 120.212C69.42 120.212 58.51 119.532 62.74 102.352C62.73 102.332 63.55 98.6516 67.23 89.9216Z" fill="black"/>
                <path d="M127.77 190.961C127.77 190.961 155.37 175.011 167.96 182.911C167.96 182.911 177.68 188.911 161.59 197.641C161.59 197.651 151.36 202.011 127.77 190.961Z" fill="black"/>
                <path d="M290.82 195.46C290.82 195.46 297 190.91 302.46 175.64C302.46 175.64 308.46 167.28 324.64 177.64C340.82 188 334.82 194.19 334.82 194.19C334.82 194.19 318.82 207.83 290.82 195.46Z" fill="black"/>
                <path d="M218.18 44.6607L223.27 51.3007C225.8 54.9707 237.54 64.6607 237.54 64.6607C237.54 64.6607 243.17 69.2507 251.09 73.3307C259.01 77.4107 263.07 76.8307 265.91 75.1207C268.75 73.4107 269.91 67.3007 269.91 67.3007C270.62 65.2507 269.27 56.9507 268.55 52.7507C267.83 48.5507 266.23 42.2607 263.37 33.1107C260.51 23.9707 257.59 20.8607 256.37 19.5607C255.15 18.2607 251.74 15.8107 246.01 15.3807C240.27 14.9407 233.19 17.9907 233.19 17.9907C233.19 17.9907 227.05 21.1107 223.19 26.6507C219.33 32.1907 217.19 38.6607 217.19 38.6607C214.98 28.9607 218.37 22.0207 218.37 22.0207C219.67 18.6807 226.88 10.7807 237.24 6.23068C247.6 1.68068 250.67 1.66067 254.22 1.12067C257.77 0.570675 272.15 1.73068 276.11 3.78068C280.06 5.83068 290.29 5.83068 290.29 5.83068C290.29 5.83068 296.7 5.35068 306.65 6.58068C316.6 7.81068 326.29 10.8107 326.29 10.8107C325.61 17.9707 322.34 24.1107 322.34 24.1107C322.34 24.1107 319.43 31.1507 312.18 34.2007C304.93 37.2507 302.91 40.6107 301.95 40.9507C300.99 41.2907 293.7 49.6807 289.47 58.6107C285.24 67.5407 285.11 71.3607 284.02 74.4607C282.93 77.5607 282.04 85.7507 280.54 95.0907C279.04 104.431 275.97 109.141 273.45 114.111C270.93 119.091 264.45 126.381 264.45 126.381C263.94 124.621 258.04 117.181 258.04 117.181L246.38 101.361L237.45 88.0607C236.56 87.5107 231.18 77.5607 229.27 74.4607C227.36 71.3607 220.74 60.1207 220.74 60.1207C220.74 60.1207 217.72 54.3507 218.18 44.6607Z" fill="black"/>
                <path d="M220.58 41.789C220.58 41.789 225.53 18.559 247.11 19.319C247.11 19.319 254.73 20.079 257.26 27.949C257.26 27.949 264.11 46.479 264.11 51.429C264.11 51.429 267.67 66.899 264.11 70.219C264.11 70.219 263.05 74.269 253.32 70.219C243.59 66.159 223.88 49.149 220.58 41.789Z" fill="black"/>
              </svg>
            </Link>
          </div>
          <nav className={styles.menuWrapper}>
            <Link href="/"><a className={styles.menuAboutLink}>О приюте</a></Link>
            <div className={`${styles.menuDropdown} ${styles.menuAboutDropdown}`}>
              <ul className={styles.menuDropdownUl}>
                <li><Link href="/basic-needs-of-teremok"><a>Основные нужды Теремка</a></Link></li>
                <li><Link href="/guardianship-and-adaptation"><a>Опекунство и адаптация</a></Link></li>
                <li><Link href="/walks-with-dogs"><a>Прогулки с собаками</a></Link></li>
                <li><VisitingRulesModal/></li>
                
                <li><Link href="/hellos-from-homes"><a>Приветы из дома</a></Link></li>
                <li><Link href="/shelter-reports"><a>Отчеты</a></Link></li>
              </ul>
            </div>
            <Link href="/pets"><a className={styles.menuPetsLink}>Питомцы</a></Link>
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
            <button className={styles.openBtn} onClick={openMenu}><img className={styles.burger} src="/img/burger.svg" alt="меню"/></button>
            <div style={menuStyle} className={styles.mobileMenuWrapper}>
              <MobileMenu closeMenu={closeMenu}/>
            </div>
          </nav>

          <div className={styles.btnWrapper}>
            <BankCardModal parent={"header"}/>
          </div>
        </div>   
      </header>
      <main>
        {children}
      </main>
      <footer>
        <div className={styles.footerBlock}>
          <Link href="/"><img className={styles.logoFooter} src="/img/logo.svg" alt="лого"/></Link>
          <div className={styles.navBlock}>
            <nav className={styles.aboutShelter}>
              <Link href="/"><h4>О приюте</h4></Link>
              <ul>
                <li><Link href="/basic-needs-of-teremok"><a>Основные нужды Теремка</a></Link></li>
                <li><Link href="/guardianship-and-adaptation"><a>Опекунство и адаптация</a></Link></li>
                <li><Link href="/walks-with-dogs"><a>Прогулки с собаками</a></Link></li>
                <li><VisitingRulesModal/></li>
                <li><Link href="/hellos-from-homes"><a>Приветы из дома</a></Link></li>
                <li><Link href="/shelter-reports"><a>Отчеты</a></Link></li>
              </ul>
            </nav>
            <nav className={styles.ourPets}>
              <Link href="/pets"><h4>Наши питомцы</h4></Link>
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
            <div className={styles.contactsPrBlock}>
              <div className={styles.contacts}>
                <h4>Контакты</h4>
                <p className={styles.phone}><a href="tel:+79214320035">+7 (921) 432-00-35</a></p>
                <p className={styles.address}>г. Санкт-Петербург,<br/>поселок под Гатчиной</p>             
              </div>
              <div className={styles.pr}>
                <h4 className={styles.prHelp}>Помочь с пиаром</h4>
                <div className={styles.socialsBlockFooter}>
                  <SocialBtns/>
                </div>
              </div>
            </div>
          </div>

          <div>
            <WebsiteTeam/>
          </div>
        </div>
      </footer>
    </>
  )
}
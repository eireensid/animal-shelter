import styles from '~/styles/components/WebsiteTeam.module.scss'

export default function WebsiteTeam() {
  return <>
    <div className={styles.developersBlock}>
      <h2>Выражаем благодарность всем, кто принимал участие в разработке сайта:</h2>
      <div className={styles.developersWrapper}>
        <div className={styles.developer}>
          <h4>Дизайн:</h4>
          <img src="/img/developers/website-design.png"/>
          <span>@yuliach_design</span>
        </div>

        <div className={styles.developer}>
          <h4>Программирование:</h4>
          <img src="/img/developers/website-programming.png"/>
          <span>@eireensid</span>
        </div>

        <div className={styles.developer}>
          <h4>Логотип:</h4>
          <img src="/img/developers/website-logo.png"/>
          <span>@lish.design</span>
        </div>

        <div className={styles.developer}>
          <h4>Видеосъёмка:</h4>
          <img src="/img/developers/website-video.png"/>
          <span>@vita.videomaker</span>
        </div>
      </div>
    </div>
  </>
}
import styles from '~/styles/components/WebsiteTeam.module.scss'

export default function WebsiteTeam() {
  return <>
    <div className={styles.developersBlock}>
      <h2>Выражаем благодарность всем, кто принимал участие в разработке сайта:</h2>
      <div className={styles.developersWrapper}>
        <div className={styles.developer}>
          <h4>Дизайн:</h4>
          <a href="https://instagram.com/yuliach_design?igshid=o41k1udegatv" target="_blank"><img src="/img/developers/website-design.png"/></a>
          <a href="https://instagram.com/yuliach_design?igshid=o41k1udegatv" target="_blank">@yuliach_design</a>
        </div>

        <div className={styles.developer}>
          <h4>Программирование:</h4>
          <a href="https://instagram.com/eireensid?igshid=2mjae97lu319" target="_blank"><img src="/img/developers/website-programming.png"/></a>
          <a href="https://instagram.com/eireensid?igshid=2mjae97lu319" target="_blank">@eireensid</a>
        </div>

        <div className={styles.developer}>
          <h4>Логотип:</h4>
          <a href="https://instagram.com/lish.design?igshid=6iygbtldo0xd" target="_blank"><img src="/img/developers/website-logo.png"/></a>
          <a href="https://instagram.com/lish.design?igshid=6iygbtldo0xd" target="_blank">@lish.design</a>
        </div>

        <div className={styles.developer}>
          <h4>Видеосъёмка:</h4>
          <a href="https://instagram.com/vita.videomaker?igshid=15o8dcbhea0nx" target="_blank"><img src="/img/developers/website-video.png"/></a>
          <a href="https://instagram.com/vita.videomaker?igshid=15o8dcbhea0nx" target="_blank">@vita.videomaker</a>
        </div>
      </div>
    </div>
  </>
}
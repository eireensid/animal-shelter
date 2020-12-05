import styles from '~/styles/components/SocialBtns.module.scss'

export default function SocialBtns() {
  return <>
    <div className={styles.socialsBlock}>
      <a href="https://wa.me/+79214320035" target="_blank"><img src="/img/whatsapp.svg" alt="what's app"/></a>
      <a href="https://vk.com/club188970721" target="_blank"><img src="/img/vk.svg" alt="vk"/></a>
      <a href="https://www.instagram.com/teremok_priyut/?hl=ru" target="_blank"><img src="/img/instagram.svg" alt="instagram"/></a>
    </div>
  </>
}
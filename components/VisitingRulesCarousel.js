import useCarousel from '~/hooks/useCarousel'
import styles from '~/styles/components/VisitingRulesCarousel.module.scss'


export default function VisitingRulesCarousel({visitingRules}) {
  const { activeIndex, curItems, prevSlide, nextSlide } = useCarousel(visitingRules, 1)
  const activeRule = curItems[0]

  const getRoundClasses = (index) => {
    const dynamicStyle = activeIndex === index ? styles.visitingRulesRoundActive : styles.visitingRulesRound
    return `${styles.visitingRulesRound} ${dynamicStyle}`
  }

  return <>
    <div className={styles.visitingRulesCarouselBlock}>
      <div className={styles.visitingRulesCarousel}>
        <div onClick={prevSlide} className={`${styles.visitingRulesArrow} ${styles.visitingRulesArrowLeft}`}>
          <img src="/img/arrow-left.svg" alt="влево"/>
        </div>
        <div className={styles.visitingRulesCard}>
          <img src={`/img/visiting-rules/${activeRule.ruleImg}`} alt="правило"/>
          <p>{activeRule.rule}</p>
          <div onClick={prevSlide} className={`${styles.visitingRulesArrowMobile} ${styles.visitingRulesArrowLeftMobile}`}>
            <img src="/img/arrow-left.svg" alt="влево"/>
          </div>
          <div onClick={nextSlide} className={`${styles.visitingRulesArrowMobile} ${styles.visitingRulesArrowRightMobile}`}>
            <img src="/img/arrow-right.svg" alt="вправо"/>
          </div>
        </div>
        <div onClick={nextSlide} className={`${styles.visitingRulesArrow} ${styles.visitingRulesArrowRight}`}>
          <img src="/img/arrow-right.svg" alt="вправо"/>
        </div>
      </div>
      <div className={styles.visitingRulesRounds}>
        {visitingRules.map((rule, index) => (
          <div className={getRoundClasses(index)} key={index}></div>
        ))}
      </div>
    </div>
  </>
}
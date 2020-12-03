import {useState, useEffect} from 'react'
import styles from '~/styles/components/VisitingRulesCarousel.module.scss'


export default function VisitingRulesCarousel({visitingRules}) {

  const len = visitingRules.length - 1
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeRule, setActiveRule] = useState(visitingRules[activeIndex]);

  useEffect(() => {
    setActiveRule(visitingRules[activeIndex])
  }, [activeIndex])

  const prevSlide = () => {
    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
  }
  const nextSlide = () => {
    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
  }

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
import styles from '~/styles/components/CardVisitingRules.module.scss'

export default function CardVisitingRules({ruleImg, rule}) {
  return <>
    <div className={styles.visitingRulesCardBlock}>
      <div className={styles.visitingRulesCard}>
        <div className={`${styles.visitingRulesArrow} ${styles.visitingRulesArrowLeft}`}>
          <img src="/img/arrow-left.svg" alt="влево"/>
        </div>
        <div className={styles.visitingRulesCardWrapper}>
          <img src={`/img/visiting-rules/${ruleImg}`} alt="правило"/>
          <p>{rule}</p>
        </div>
        <div className={`${styles.visitingRulesArrow} ${styles.visitingRulesArrowRight}`}>
          <img src="/img/arrow-right.svg" alt="вправо"/>
        </div>
      </div>
      <div className={styles.visitingRulesRounds}>
        <div className={styles.visitingRulesRound}></div>
        <div className={styles.visitingRulesRound}></div>
        <div className={styles.visitingRulesRound}></div>
      </div>
    </div>
  </>
}
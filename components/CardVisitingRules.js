import styles from '~/styles/components/CardVisitingRules.module.scss'

export default function CardVisitingRules({ruleImg, rule}) {
  return <>
    <div className={styles.visitingRulesCardsBlock}>
      <div className={styles.visitingRulesArrow}>
        <img src="/img/arrow-left.png" alt="влево"/>
      </div>
      <div className={styles.visitingRulesCardWrapper}>
        <img src={`/img/visiting-rules/${ruleImg}`} alt="правило"/>
        <p>{rule}</p>
      </div>
      <div className={styles.visitingRulesArrow}>
        <img src="/img/arrow-right.png" alt="вправо"/>
      </div>
    </div>
  </>
}
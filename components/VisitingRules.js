import {useState} from 'react'
import styles from '~/styles/components/VisitingRules.module.scss'
import CallWriteBtns from '~/components/CallWriteBtns'
import CardVisitingRules from '~/components/CardVisitingRules'

export default function VisitingRules() {

  const [visitingRules, setVisitingRules] = useState([
    {rule: "Вы можете погулять с собакам или помочь уборкой, кормлением, чисткой вольеров, договоритесь об этом̆ заранее.", ruleImg: "rule1.png"},
    // {rule: "Миша", ruleImg: "Misha.png"},
    // {rule: "Миша", ruleImg: "Misha.png"},
    // {rule: "Миша", ruleImg: "Misha.png"},
    // {rule: "Миша", ruleImg: "Misha.png"},
    // {rule: "Миша", ruleImg: "Misha.png"},
    // {rule: "Миша", ruleImg: "Misha.png"},
    // {rule: "Миша", ruleImg: "Misha.png"},
    // {rule: "Миша", ruleImg: "Misha.png"},
    // {rule: "Миша", ruleImg: "Misha.png"},
    // {rule: "Миша", ruleImg: "Misha.png"},
    // {rule: "Миша", ruleImg: "Misha.png"},
    // {rule: "Миша", ruleImg: "Misha.png"},
    // {rule: "Миша", ruleImg: "Misha.png"}
  ])

  return <>
    <div className={styles.visitingRulesBlock}>
      <h2>Правила посещения приюта:</h2>
      <h3>Обязательно:</h3>
      <p>Перед тем, как привезти / отправить вещи, вам необходимо за 3-4 дня написать в What’s Up или позвонить. Мы подскажем точный адрес, 
        дни визита и ответим на все ваши вопросы.</p>
      <div className={styles.callWriteBtnsWrapper}>
        <CallWriteBtns/>
      </div>

      <div className={styles.paddingRight}>
        {visitingRules.map((rule, key) => (
          <CardVisitingRules ruleImg={rule.ruleImg} rule={rule.rule} key={Math.random()}/>
        ))}
      </div>
    </div>
  </>
}
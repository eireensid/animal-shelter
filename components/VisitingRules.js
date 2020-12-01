import {useState} from 'react'
import styles from '~/styles/components/VisitingRules.module.scss'
import CallWriteBtns from '~/components/CallWriteBtns'
import CardVisitingRules from '~/components/CardVisitingRules'

export default function VisitingRules() {

  const [visitingRules, setVisitingRules] = useState([
    {rule: "Вы можете погулять с собакам или помочь уборкой, кормлением, чисткой вольеров, договоритесь об этом̆ заранее.", ruleImg: "rule1.png"},
    // {rule: "По приезду надо отметиться, что вы прибыли, напомнить, о какой деятельности договорились.", ruleImg: "rule2.png"},
    // {rule: "Все собаки гуляют только на поводке. Перед прогулкой необходимо проверить целостность и крепость ошейника, поводка, карабин.", ruleImg: "rule3.png"},
    // {rule: "На прогулке необходимо крепко держать поводок в руке, быть крайне внимательным.", ruleImg: "rule4.png"},
    // {rule: "Не допускайте близкого контакта животных на прогулке.", ruleImg: "rule5.png"},
    // {rule: "Лучше взять с собой сменную одежду и обувь, перчатки. ", ruleImg: "rule6.png"},
    // {rule: "Если у вас есть поводок, тоже лучше взять с собой, так как поводков очень мало.", ruleImg: "rule7.png"},
    // {rule: "Не оставляйте после себя мусор на территории приюта.", ruleImg: "rule8.png"},
    // {rule: "Пожалуйста, если вы помогаете с порядком, поводки и инвентарь отнесите в строго отведённое место.", ruleImg: "rule9.png"},
    // {rule: "Если помогаете в кормлении: Просьба ставить Собакам только большие миски и наливать целое ведро воды. ", ruleImg: "rule10.png"},
    // {rule: "В мешки с грязными опилками, не бросайте банки, мешки из-под корма и прочее.", ruleImg: "rule11.png"},
    // {rule: "Если вы обнаружили в грязной миске остатки кислой каши, следует выбросить кашу на помойку, помыть миску и положить свежей еды.", ruleImg: "rule12.png"},
    // {rule: "Не оставляйте открытые краны с водой.", ruleImg: "rule13.png"},
    // {rule: "Пожалуйста, помогайте нам поддерживать порядок в местах общего пользования.", ruleImg: "rule14.png"}
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

      <div>
        {visitingRules.map((rule, key) => (
          <CardVisitingRules ruleImg={rule.ruleImg} rule={rule.rule} key={Math.random()}/>
        ))}
      </div>
    </div>
  </>
}
import {useState} from 'react'
import Modal from 'react-modal'
import VisitingRulesCarousel from '~/components/VisitingRulesCarousel'
import styles from '~/styles/components/VisitingRulesModal.module.scss'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    transform             : 'translate(-50%, -50%)',
    padding: '0',
    border: 'none',
    borderRadius: '0',
    width: '77%',
    background: '#FFF5DA'
  },
  overlay: {zIndex: 1000}
}

Modal.setAppElement('#__next')

export default function BankCardModal({parent}) {
  const [visitingRules, setVisitingRules] = useState([
    {rule: "Вы можете погулять с собаками или помочь уборкой, кормлением, чисткой вольеров — договоритесь об этом заранее.", ruleImg: "rule1.png"},
    {rule: "По приезду надо отметиться, что вы прибыли, напомнить, о какой деятельности договорились.", ruleImg: "rule2.png"},
    {rule: "Все собаки гуляют только на поводке. Перед прогулкой необходимо проверить целостность и крепость ошейника, поводка, карабина.", ruleImg: "rule3.png"},
    {rule: "На прогулке необходимо крепко держать поводок в руке, быть крайне внимательным.", ruleImg: "rule4.png"},
    {rule: "Не допускайте близкого контакта животных на прогулке.", ruleImg: "rule5.png"},
    {rule: "Лучше взять с собой сменную одежду и обувь, перчатки.", ruleImg: "rule6.png"},
    {rule: "Если у вас есть поводок, тоже лучше взять с собой, так как поводков очень мало.", ruleImg: "rule7.png"},
    {rule: "Не оставляйте после себя мусор на территории приюта.", ruleImg: "rule8.png"},
    {rule: "Пожалуйста, если вы помогаете с порядком, поводки и инвентарь относите в строго отведённое место.", ruleImg: "rule9.png"},
    {rule: "Если помогаете в кормлении: просьба ставить собакам только большие миски и наливать целое ведро воды.", ruleImg: "rule10.png"},
    {rule: "В мешки с грязными опилками не бросайте банки, мешки из-под корма и прочее.", ruleImg: "rule11.png"},
    {rule: "Если вы обнаружили в грязной миске остатки кислой каши, следует выбросить кашу на помойку, помыть миску и положить свежей еды.", ruleImg: "rule12.png"},
    {rule: "Не оставляйте открытые краны с водой.", ruleImg: "rule13.png"},
    {rule: "Пожалуйста, помогайте нам поддерживать порядок в местах общего пользования.", ruleImg: "rule14.png"}
  ])

  const [modalIsOpen,setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true)
  }
 
  const closeModal = () => {
    setIsOpen(false);
  }

  

  return <>  
    <div>
      <a onClick={openModal}>Правила посещения приюта</a>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.modal}
        style={customStyles}
        contentLabel="Visiting Rules Modal"
      >

        <div className={styles.visitingRulesModalWrapper}>
          <div className={styles.visitingRulesModalClose}>
            <button className={styles.btnClose} onClick={closeModal}><img src="/img/close.png" alt="закрыть"/></button>
          </div>
          <VisitingRulesCarousel  visitingRules={visitingRules}/>
        </div>
      </Modal>
    </div>
  </>
}
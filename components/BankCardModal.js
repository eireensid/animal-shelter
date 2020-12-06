import {useState} from 'react'
import Modal from 'react-modal'
import BankCard from '~/components/BankCard'
import styles from '~/styles/components/BankCardModal.module.scss'

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
    width: '77%'
  },
}

Modal.setAppElement('#__next')

export default function BankCardModal() {
  var subtitle;
  const [modalIsOpen,setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function closeModal(){
    setIsOpen(false);
  }

  return <>  
    <div>
      <button onClick={openModal}>Пожертвовать</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Bank Card Modal"
      >

        <div className={styles.bankCardModal}>
          <div className={styles.bankCardModalClose}>
            <button className={styles.btnClose} onClick={closeModal}><img src="/img/close.png" alt="закрыть"/></button>
          </div>
          <p>Просто нажмите на кнопку, и номер карты автоматически скопируется</p>
          <BankCard/>
        </div>
      </Modal>
    </div>
  </>
}
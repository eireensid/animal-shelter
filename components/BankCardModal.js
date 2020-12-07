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
    width: '77%',
    // height: '90vh',
    background: '#FFF5DA'
  },
}

Modal.setAppElement('#__next')

export default function BankCardModal({parent}) {
  const [modalIsOpen,setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  }
 
  const closeModal = () => {
    setIsOpen(false);
  }

  const btnStyle = () => {
    const dynamicStyle = parent === "header" ? styles.donationBtnHeader : ''
    return dynamicStyle
  }

  return <>  
    <div>
      <button className={btnStyle()} onClick={openModal}>Пожертвовать</button>
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
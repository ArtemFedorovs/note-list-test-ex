import {AddNoteModal} from '../addNoteModal/AddNoteModal';
import {useState} from 'react';
import styles from './AddButton.module.css';


export function AddButton() {
 
  const [isModalVisible, setModalVisibility] = useState(false);  //Стейт видимости модального окна
  const closeModal = () => setModalVisibility(false);
  const openModal = () => setModalVisibility(true);

  return (
    <div onClick={() => openModal()} className={styles.button}>
      Добавить
      {isModalVisible && <AddNoteModal closeModal={closeModal}/>}
    </div>
  );
}

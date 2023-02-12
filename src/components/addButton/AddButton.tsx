import {AddNoteModal} from '../addNoteModal/AddNoteModal';
import {useState} from 'react';
import styles from './AddButton.module.css';


export function AddButton() {
 
  const [isModal, setModal] = useState(false) ;  
  const onClose = () => setModal(false);           
  const openModal = () => setModal(true);

  return (
    <div onClick={() => openModal()} className={styles.button}>
      Добавить
      <AddNoteModal 
        visible={isModal}
        onClose={onClose}
      />
    </div>
  );
}

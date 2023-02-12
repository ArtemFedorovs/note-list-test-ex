import {AppDispatch} from '../../app/store'; //типы redux
import { useDispatch} from 'react-redux';
import {useState} from 'react';
import styles from './AddNoteModal.module.css';

type ModalPropType = {
  closeModal: () => void
};

export function AddNoteModal({closeModal}: ModalPropType) {
  const dispatch:  AppDispatch = useDispatch();
  const [inputValue, changeInputValue] = useState("");

  function addNote(): void {
    inputValue && dispatch({type: "ADD NEW NOTE", payload: inputValue}); 
    changeInputValue("")
    document.getElementById("textarea")?.focus();
  }
 
  return (
    <div className={styles.modal}>
        <div className={styles.modalDialog} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
                <h3 className={styles.modalTitle}>Добавить заметку</h3>
                <span className={styles.modalClose} onClick={closeModal}>&times;</span>
            </div>
            <div className={styles.modalBody}>
                <div className={styles.modalContent}>
                    <textarea id='textarea' data-testid="textarea" className={styles.modalInput} placeholder='Введите новую заметку' value={inputValue} onChange={(event)=>changeInputValue(event.target.value)}/>
                </div>
            </div>
           <div className={styles.modalFooter}>
               <button className={styles.modalButton} onClick={addNote}>Ок</button>
               <button className={styles.modalButton}  onClick={closeModal}>Отмена</button>
            </div>
        </div>
      </div>
  );
}

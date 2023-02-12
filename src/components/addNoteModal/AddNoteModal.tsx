import {AppDispatch} from '../../app/store'; //типы redux
import { useDispatch} from 'react-redux';
import {useState} from 'react';

import styles from './AddNoteModal.module.css';

type ModalPropType = {
  visible: boolean, 
  onClose: () => void
};

export function AddNoteModal({visible, onClose}: ModalPropType) {
  const dispatch:  AppDispatch = useDispatch();
  const [value, changeValue] = useState("") ;
  function addNote(): void {
    value && dispatch({type: "ADD NEW NOTE", payload: value});
    changeValue("")
  }
 

  if (!visible) return null
  return (
    <div className={styles.modal} onClick={onClose}>
        <div className={styles.modalDialog} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
                <h3 className={styles.modalTitle}>Добавить заметку</h3>
                <span className={styles.modalClose} onClick={onClose}>&times;</span>
            </div>
            <div className={styles.modalBody}>
                <div className={styles.modalContent}>
                    <textarea className={styles.modalInput} placeholder='Введите заметку' value={value} onChange={(event)=>changeValue(event.target.value)}/>
                </div>
            </div>
           <div className={styles.modalFooter}>
               <button className={styles.modalButton} onClick={()=> addNote()}>Ок</button>
               <button className={styles.modalButton}  onClick={()=> onClose()}>Отмена</button>
            </div>
        </div>
      </div>
  );
}

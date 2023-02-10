import { AppDispatch} from '../../app/store'; //типы redux
import { useDispatch} from 'react-redux';

import {useState} from 'react';

import styles from './DeleteButton.module.css';




export function DeleteButton() {
  
  const dispatch:  AppDispatch = useDispatch();
  function deleteNote(): void {
    dispatch({type: "DELETE NOTE",});
  }

  return (
    <div className={styles.button}>
      <p onClick={() => deleteNote()}>Удалить</p>

    </div>
  );
}

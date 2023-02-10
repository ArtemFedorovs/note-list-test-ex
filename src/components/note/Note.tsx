import {RootState, AppDispatch} from '../../app/store'; //типы redux
import {useSelector, useDispatch} from 'react-redux';

import styles from './Note.module.css';

type NotePropType = {
  id: number, 
  value: string, 

}

export function Note({value, id}: NotePropType) {
  const activeNote: number | null = useSelector((state: RootState)=>state.notes.activeNote)
  let isChosen: boolean = activeNote === id
  const dispatch:  AppDispatch = useDispatch();
  function choseThisNote(): void {
    !isChosen && dispatch({type: "CHANGE FOCUS", payload: id});
  }
  function chose(){}
  return (
    <div className={isChosen?styles.chosenNote:styles.note} onClick ={()=>choseThisNote()} >
      {value}
    </div>
  );
}

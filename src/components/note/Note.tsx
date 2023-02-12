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
  return (
    <div className={styles.flexContainer}>
      <div className={isChosen?styles.chosenNoteMarker:styles.noteMarker} onClick ={()=>choseThisNote()} ></div>
      <div className={isChosen?styles.chosenNote:styles.note} onClick ={()=>choseThisNote()} >{value.split('\n').map( (it, i) => <div key={'x'+i}>{it}</div> )}</div>
    </div>
  );
}

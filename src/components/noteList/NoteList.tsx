
import {RootState, NoteType} from '../../app/store'; //типы redux
import {useSelector} from 'react-redux';
import { Note } from '../note/Note';
import styles from './NoteList.module.css';

export function NoteList() {
  const noteList = useSelector((state: RootState)=>state.notes.noteList) 

  return (
    <div>
      <h1>Список заметок</h1>
      <div className = {styles.list}>
        {!noteList ? null : noteList.map((unit: NoteType)=> <Note key ={unit.id} id = {unit.id} value = {unit.value} />
        )}
      </div>
    </div>
  );
}

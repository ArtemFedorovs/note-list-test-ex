import { useState } from 'react';
import {RootState, AppDispatch, NoteType} from '../../app/store'; //типы redux
import {useSelector, useDispatch} from 'react-redux';
import { Note } from '../note/Note';
import styles from './NoteList.module.css';

export function NoteList() {
  const noteList = useSelector((state: RootState)=>state.notes.noteList)

  return (
    <div className="list">
      {!noteList ? null : noteList.map((unit: NoteType)=> <Note key ={unit.id} id = {unit.id} value = {unit.value} />
      )}
    </div>
  );
}

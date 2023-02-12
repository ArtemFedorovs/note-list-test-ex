import { configureStore } from '@reduxjs/toolkit';
import { AnyAction } from 'redux'

export type NoteType = {id: number, value: string}
type NoteListType =  null | NoteType[];

type StateType = {
  activeNote: null | number, 
  noteList: NoteListType
};

const noteListReducer = (state: StateType  = { activeNote: null, noteList: []}, action: AnyAction) : StateType => {
  switch (action.type){
    
    case "ADD NEW NOTE":{
      let newlist = JSON.parse(JSON.stringify(state.noteList));
      newlist.push({id: new Date().valueOf(),  value: action.payload});
      return {...state, noteList: newlist};
    };  
    case "DELETE NOTE":{
      let newlist: NoteListType = JSON.parse(JSON.stringify(state.noteList));
      let newActiveNote: null | number = JSON.parse(JSON.stringify(state.activeNote));
      if (newActiveNote !== null && newlist !== null) {  //Проверка на наличии выделенной записи в списке
        let index = newlist.findIndex(elem => elem.id === newActiveNote); //Находим индекс выделенного элемента в массиве
        newlist.splice(index, 1,);  //Удаляем элемент
        (index > 0) ? newActiveNote = newlist[index-1].id : newActiveNote = null;//делаем активной предыдущую запись
      };  
      return {activeNote: newActiveNote, noteList: newlist};
    };
    case "CHANGE FOCUS":{  //При клике на запись в redux придет информация о том, какую из записе выбрали
      let newstate: StateType = JSON.parse(JSON.stringify(state));
      newstate.activeNote = action.payload  
      return newstate;
    };
   
    default: return state;
  } ;
};

export const store = configureStore({
  reducer: {
    notes: noteListReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

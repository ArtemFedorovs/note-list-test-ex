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
      if (state.activeNote !== null && newlist !== null) {  //Проверка на наличии выделенной записи в списке
        let index = newlist.findIndex(elem => elem.id === state.activeNote); //Находим индекс выделенного элемента в массиве
        newlist.splice(index, 1,);  //Удаляем элемент
      };  
      return {activeNote: null, noteList: newlist};
    };
    case "CHANGE FOCUS":{
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

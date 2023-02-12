import { AppDispatch} from '../../app/store'; //типы redux
import { useDispatch} from 'react-redux';
import styles from './DeleteButton.module.css';

export function DeleteButton() {
  const dispatch:  AppDispatch = useDispatch();
  function deleteNote(): void {
    dispatch({type: "DELETE NOTE",});
  }

  return (
    <div onClick={() => deleteNote()} className={styles.button}>
      Удалить
    </div>
  );
}

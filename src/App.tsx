import { NoteList } from './components/noteList/NoteList';
import { AddButton} from './components/addButton/AddButton';
import { DeleteButton } from './components/deleteButton/DeleteButton';
import { TestButton} from './components/testButton/TestButton';
import './App.css';

function App() {
  return (
    <div className="App">

        <NoteList />
        <AddButton />
        <DeleteButton />
        <TestButton />
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css'
import NewToDoItem from './components/ToDo/NewToDoItem'
import ToDos from './components/ToDo/ToDos';
// redux
import { useSelector, useDispatch } from 'react-redux'

//materialUI
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';

const App = () => {

  const users = useSelector(state => state.users)

  return (
    <div className="App">
      <Container>
        <Typography variant="h3" component="div" gutterBottom>
          To Do List App
        </Typography>
        <NewToDoItem />
        <ToDos items={users.info.items}></ToDos>
      </Container>
    </div>
  );
}

export default App;

import './App.css';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
    return (
        <div className='App'>
            <CssBaseline />
            <Header />
            <TaskForm />
            <TaskList />
        </div>
    );
}

export default App;

import './App.css';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import CompletedTaskList from './components/CompletedTaskList';
import Wrapper from './components/Wrapper';

function App() {
    return (
        <div className='App'>
            <CssBaseline />
            <Header />
            <Wrapper>
                <TaskForm />
                <TaskList />
                <CompletedTaskList />
            </Wrapper>
        </div>
    );
}

export default App;

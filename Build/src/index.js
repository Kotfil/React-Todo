import React from 'react';
import ReactDOM from 'react-dom';

// import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';


        const AppHeader = () => {
            return <h1> My Todo List </h1>;
        };



const App = () => {

    return (
   <div>
        <AppHeader />
        <SearchPanel />
        <TodoList />
    </div>
    );
};

 ReactDOM.render(<App />,
 document.getElementById('root'));

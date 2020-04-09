import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";

const App = () => {

    const todoData = [
        {label: 'Drink Coffe', important: false,id:1},
        {label: 'Make Awesome App', important: true,id:2},
        {label: 'Have a lunch', important: false,id:3}
    ]
    return (
        <div>
            <TodoList todos={todoData}/>
            <AppHeader/>
            <SearchPanel/>

        </div>
    );
}

ReactDOM.render(<App/>,
    document.getElementById('root'));

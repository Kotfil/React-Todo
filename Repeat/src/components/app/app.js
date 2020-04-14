import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './../app-header';
import SearchPanel from './../search-panel';
import TodoList from './../todo-list';
import ItemStatusFilter from './../item-status-filter';
import ItemAddForm from "./../item-add-form";
import './app.css';

export default class App extends Component {

    maxID = 100;


    state = {
        todoData: [
            this.createToDoItem('Drink Coffee'),
            this.createToDoItem('Make Awesome App'),
            this.createToDoItem('Drink Tea')
        ]
    };

    createToDoItem(label) {
        return {
            label,
            done: false,
            important: false,
            id: this.maxID++
        }
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);

        });
    };

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];
        const newItem = {
            ...oldItem,
            [propName]: !oldItem[propName]
        };

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    addItem = (text) => {
        const newItem = this.createToDoItem(text);


        this.setState(({todoData}) => {
            const newTaskArr = [...todoData, newItem];
            return {
                todoData: newTaskArr
            };
        });

    }
    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        });

    };
    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        });
    };


    render() {
        const {todoData} = this.state;

        const todoDone = this.state.todoData
            .filter((el => el.done)).length;
        const todoCount = todoData.length - todoDone;


        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={todoDone}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <TodoList todos={todoData}
                          onDeleted={this.deleteItem}
                          onToggleImportant={this.onToggleImportant}
                          onToggleDone={this.onToggleDone}/>
                <ItemAddForm addTaskItem={this.addItem}/>
            </div>
        );
    };
};
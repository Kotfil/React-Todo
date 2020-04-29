import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

class App extends React.Component {


    constructor(props) {
        super(props);
        this.newTaskTitleRef = React.createRef();
    }


    state = {
        tasks: [
            {title: "JS", isDone: false, priority: "high"},
            {title: "wwwwwww", isDone: true, priority: "high"},
            {title: "eeeeeee", isDone: true, priority: "low"},
            {title: "rrrrrrrrrr", isDone: false, priority: "low"}
        ],

        filterValue: ""


    };

    onAddTaskClick = () => {
        let newText = this.newTaskTitleRef.current.value;
        this.newTaskTitleRef.current.value = "";
        let newTask = {title: newText, isDone: true, priority: "high"};
        let newTasks = [...this.state.tasks, newTask];
        this.setState({tasks: newTasks});
        //sd


    }
    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        });
    }
    render = () => {


        return (
            <div className="App">
                <div className="todoList">
                    <h3 className="todoList-header__title">What to Learn</h3>
                    <div className="todoList-newTaskForm">
                        <input ref={this.newTaskTitleRef} type="text" placeholder="New task name"/>
                        <button onClick={this.onAddTaskClick}>Add</button>
                    </div>
                    <TodoListTasks tasks={this.state.tasks.filter(t => {
                        if (this.state.filterValue === "All") {
                            return true;
                    }
                    if (this.state.filterValue === "Active") {
                        return t.isDone = false;
                    }
                        if (this.state.filterValue === "Complete") {
                            return t.isDone === true;
                        }
                    })}/>

                    <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;


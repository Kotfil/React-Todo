import React from 'react';
import './App.css';


class TodoListTasks extends React.Component {
    render = () => {
        return (
            <div className="TodoList-task">
                <input type="checkbox" checked={this.props.isDone}/>
                <span>{this.props.title}</span>
            </div>
        );
    }
}

export default TodoListTasks;


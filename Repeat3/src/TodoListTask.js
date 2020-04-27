import React from 'react';
import './App.css';


class TodoListTask extends React.Component {
    render = () => {
        return (
            <div className="TodoList-task">
                <input type="checkbox" checked={this.props.isDone}/>
                <span>{this.props.title}</span>
                <div>priority: {this.props.priority}</div>
            </div>
        );
    }
}

export default TodoListTask;


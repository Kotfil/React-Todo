import React from 'react';
import './App.css';

export default class TodoListTask extends React.Component {

    onIsDoneChanged = (e) => {

        this.props.onTaskStatusChanged(this.props.task, e.currentTarget.checked);
    }


    render = () => {

        let taskClass = this.props.task.isDone
            ? "todoList-task done"
            : "todoList-task"


    return (
            <div className={taskClass}>
                <input
                        type="checkbox"
                        checked={this.props.task.isDone}
                        onChange={this.onIsDoneChanged}/>
                <span>{this.props.task.title}</span>,
                priority: {this.props.task.priority}
            </div>
        )
}

    }

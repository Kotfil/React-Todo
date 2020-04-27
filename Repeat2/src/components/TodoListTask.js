import React, {Component} from 'react';
import TodoListTasks from "./TodoListTasks";


class TodoListTask extends Component {

    render = () => {

        return (
                <div className="todoList-task">
                  <input type="checkbox" checked={this.props.isDone}/>
                  <span>{this.props.title}</span>
                </div>

        )
    }
}

export default TodoListTask;

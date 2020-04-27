import React, {Component} from 'react';


class TodoListFooter extends Component {
    render() {
        return (

            <div className="todoList-footer">
                <button>All</button>
                <button>Completed</button>
                <button>Active</button>
            </div>
        )
    }
}

export default TodoListFooter;
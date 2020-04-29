import React from 'react';
import './App.css';

export default class TodoListHeader extends React.Component {

    constructor(props) {

        super(props);
        // this.newTasksTitileRef = React.createRef();
    }

    state = {
        error: true,
        title: ""
    }


    onAddTaskClick = () => {
        // let newText = this.newTasksTitileRef.current.value;
        // this.newTasksTitileRef.current.value = "";
        let newText = this.state.title;
        this.setState({title: ""})
        if (newText === "") {
            this.setState({error: true})
        } else {
            this.setState({error: false})
            this.props.addTask(newText);
        }
    }

    onTitleChanged = (e) => {
        this.setState({
            error: false,
            title: e.target.value})
    }

    onKeyPress = (e) => {
        if (e.key === "Enter") {
            this.onAddTaskClick();
        }
    }
    render = () => {

        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input
                        type="text"
                        placeholder="New task name"
                        // ref={this.newTasksTitileRef}
                        className={this.state.error ? "error" : ""}
                        onChange={this.onTitleChanged}
                        onKeyPress={this.onKeyPress}
                        value={this.state.title}
                    />
                    <button onClick={this.onAddTaskClick}>Add</button>
                </div>
            </div>
        );
    }
}



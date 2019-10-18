import React from 'react';

const TodoList = () => {
    return (
      <ul>
      <li><TodoListItem label ="Drink Coffe" /></li>
      <li><TodoListItem
       label ="Build React App" important /></li>
  </ul>
    );
        };
      export default TodoList;
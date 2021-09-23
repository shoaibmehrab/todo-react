import React from 'react';
import TodoListItem from './TodoListItem';
import NewTodoFrom from './NewTodoForm';


const TodoList = ({ todos = [{text: 'Hello'}] }) => {
    return(
    <div>
        <NewTodoFrom />
        <hr/>
        {todos.map(todo => <TodoListItem todo={todo} />)}
    </div>
    );
};

export default TodoList;
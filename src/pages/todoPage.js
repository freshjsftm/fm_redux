import React from 'react';
import TaskForm from '../components/TaskForm';
import TodoList from '../components/TodoList';

const TodoPage = () => {
  return (
    <div>
     <TaskForm />
     <hr/>
     <TodoList />
    </div>
  );
}

export default TodoPage;

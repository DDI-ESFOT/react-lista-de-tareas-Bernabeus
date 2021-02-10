import React from 'react';
import '../styles/App.css';
import TodoList from './TodoList';
import UserList from './UserList';

const App = () => (
  <>
    <UserList />
    <TodoList />
  </>
);

export default App;
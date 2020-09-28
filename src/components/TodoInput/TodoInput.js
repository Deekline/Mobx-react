import React from 'react';
import {useStores} from '../../hooks/storeHook';

const TodoInput = () => {
  const {TodoStore} = useStores();
  const [todo, setTodo] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    TodoStore.addTodo(todo);
    setTodo('');
  };

  return (
      <form onSubmit={handleSubmit}>
        <input name={'todo'} value={todo} placeholder={'Type task here'}
               onChange={(e) => setTodo(e.target.value)}/>
        <button type={'submit'}>Add task</button>
      </form>
  );
};

export default TodoInput;

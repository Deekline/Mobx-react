import React from 'react';
import {useObserver} from 'mobx-react';
import TodoListItem from '../TodoListItem/TodoListItem';
import {useStores} from '../../hooks/storeHook';

const TodoList = () => {
  const {TodoStore} = useStores()

  const handleDeleteItem = (taskId) => {
    TodoStore.deleteTodoItem(taskId);
  };

  return useObserver(() => (
      <div>
        <ul>
          {TodoStore.todos.map((todo, index) => {
            return (
                <TodoListItem key={index} task={todo}
                              handleDeleteItem={handleDeleteItem}
                />
            );
          })}
        </ul>
      </div>
  ));
};

export default TodoList;

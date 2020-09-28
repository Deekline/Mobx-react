import React from 'react';
import {useObserver} from 'mobx-react';
import styles from './TodoListItems.module.css';

const TodoListItem = ({task, handleDeleteItem}) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [text, setText] = React.useState('')


  const saveText = () => {
    task.updateText(text);
    setIsEditing(false);
    setText('');
  }

  return useObserver(() => (
      <li className={styles.listItem}>
        {isEditing ? (
            <>
              <input type={text} onChange={(e) => setText(e.target.value)}/>
              <button onClick={saveText}>Save text</button>
            </>
        ) : (
            <>
              <p>{task.title}</p>
              <input type={'checkbox'} value={task.done} onChange={() => task.toggleDone()}/>
              <button onClick={() => setIsEditing(true)}>edit</button>
              <button onClick={() => handleDeleteItem(task.id)}>X</button>
            </>
        )
        }
      </li>
  ));
};

export default TodoListItem;

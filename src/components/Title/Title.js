import React from 'react';
import {useObserver} from 'mobx-react';
import {useStores} from '../../hooks/storeHook';

const Title = () => {
  const {TodoStore} = useStores();
  return useObserver(() => (
      <div>
        <h1>You have todos - {TodoStore.allTodos}</h1>
        <h4>Todos to be done - {TodoStore.notDoneTodos}</h4>
      </div>
  ));
};

export default Title;

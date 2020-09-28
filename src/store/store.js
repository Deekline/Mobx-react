import {useLocalStore} from 'mobx-react';
import React from 'react';
import TodoStore from './TodoStore';

export const StoreContext = React.createContext(undefined);


export const StoreProvider = ({children}) => {
  const store = useLocalStore(() => ({
    TodoStore: new TodoStore(),
  }));

  return (
      <StoreContext.Provider value={store}>
        {children}
      </StoreContext.Provider>
  );
};

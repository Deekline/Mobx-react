import React from 'react';
import {Title, TodoInput, TodoList} from './components';
import {StoreProvider} from './store/store';

const App = () => {
  return (
      <StoreProvider>
        <div className="App">
          <Title/>
          <TodoInput/>
          <TodoList/>
        </div>
      </StoreProvider>
  );
};

export default App;

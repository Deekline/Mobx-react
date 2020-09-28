import {decorate, observable, action} from 'mobx';

export class TodoItemStore {

  id = Date.now().toString();

  title = '';
  done = false;

  constructor(text) {
    this.title = text
  }

  toggleDone = () => {
    this.done = !this.done;
  };

  updateText = (text) => {
    this.title = text
  }
}

decorate(TodoItemStore, {
  title: observable,
  done: observable,
  toggleDone: action,
  updateText: action,
});

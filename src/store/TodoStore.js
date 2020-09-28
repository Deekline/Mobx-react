import {action, computed, decorate, observable} from 'mobx';
import {TodoItemStore} from './TodoItemStore';

export default class TodoStore {
  todos = []

  addTodo(text) {
    return this.todos.push(new TodoItemStore(text))
  };

  deleteTodoItem(todo) {
    return this.todos.splice(this.todos.indexOf(todo), 1)
  }

  get allTodos() {
    return this.todos.length
  }

  get notDoneTodos() {
    return this.todos.filter(todo => !todo.done).length;
  }

}

decorate(TodoStore, {
  todos: observable.shallow,
  addTodo: action,
  deleteTodoItem: action,
  allTodos: computed,
  notDoneTodos: computed,
});

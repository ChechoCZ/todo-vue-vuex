import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let id = 0;

const store = new Vuex.Store({
  state: {
    todos: []
  },

  getters: {
    total_todos(state) {
      return state.todos.length;
    },

    done_todos(state) {
      return state.todos.filter(todo => todo.completed).length;
    }
  },

  mutations: {
    addTodo(state, todo) {
      state.todos = [ ...state.todos, { id: id++, description: todo, completed: false } ];
    },

    completeTodo(state, id) {
      state.todos = state.todos.map(todo => todo.id === id ? { ...todo, completed:true } : todo);
    }
  }
});

export default store;
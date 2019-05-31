<template>
  <div class="todo-list">
    <ul v-for="todo in todos" :key="todo.id">
      <todo v-bind:todo="todo"></todo>
    </ul>    
  </div>
</template>

<script>
  import Todo from './Todo';
  
  export default {
    computed: {
      todos() {
        return this.$store.state.todos;
      }      
    },
    
    components: {
      'todo': Todo
    }
  }
</script>

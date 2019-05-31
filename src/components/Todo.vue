<template>
  <div class="todo">
    <li :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }" 
      v-on:click="completeTodo(todo.id)">{{ todo.description }}</li>
  </div>  
</template>

<script>
  export default {
    props: ['todo'],

    methods: {
      completeTodo(id) {
        this.$store.commit('completeTodo', id);
      }
    }
  }
</script>

<style scoped>
  .todo {
    margin: 10px;
  }

  .todo li {
    display: flex;
    align-items: center;
    width: 60%;
    margin: auto auto;
    height: 30px;
    border: 1px solid;
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
    padding-left: 10px;
  }
</style>

<template>
  <div class="todo-footer">
    <p>Done Tasks: {{ done }}</p>
    <p>Total Tasks: {{ total }}</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters({ total: 'total_todos',  done: 'done_todos' })      
    } 
  }
</script>


<style>
  .todo-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    background: #dddddd;
    position: absolute;
    bottom: 0px;
    width: 100%;
  }

  .todo-footer p {
    font-size: 16px;
    font-weight: bold;
  }
</style>


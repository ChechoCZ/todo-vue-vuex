<template>
  <div class="todo-add">
    <form @submit.prevent="addTodo">
      <input type="text" placeholder="New To Do!" v-model="description"/>
      <button type="submit">Add To Do</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        description: ''
      }       
    },
    
    methods: {
      addTodo() {
        this.$store.commit('addTodo', this.description);
        this.description = '';
      }
    }
  }
</script>

<style scoped>
  form {
    width: 60%;
    margin: auto auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-top: 30px;
  }

  form input[type=text] {
    height: 35px;
    width: 50%;
    border-radius: 5px;  
    padding: 5px;
    border: 1px solid;
    margin-right: 15px;
    font-size: 16px;
  }

  form button {  
    display: flex;
    align-self: flex-end;
    padding: 10px 20px;
    border-radius: 5px;
    border: 0;
    background: #46d175;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }

  form button:hover {
    background: #3ab162;
  }
</style>


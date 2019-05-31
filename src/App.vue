<template>
  <div id="app">
    <Header />
    <TodoList />
    <AddTodo />
    <Footer />
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import TodoList from './components/TodoList.vue';
  import AddTodo from './components/AddTodo.vue';
  import Footer from './components/Footer.vue';

  export default {
    name: 'app',
    components: {
      Header,
      TodoList,
      AddTodo,
      Footer
    }
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
  outline: 0;
  font-family: 'Courier New', Courier, monospace;
  box-sizing: border-box;
}
</style>

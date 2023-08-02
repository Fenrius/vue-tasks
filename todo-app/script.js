Vue.createApp({
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    getNewTodo() {
      const description = document.querySelector("#todoEnter").value;
      const newTodo = {
        description: description,
        done: false,
        id: Math.floor(Math.random() * 10),
      };

      this.todos.push(newTodo);
      todoEnter.value = "";
    },
  },
  created() {
    fetch("http://localhost:4730/todos")
      .then((response) => response.json())
      .then((todoData) => (this.todos = todoData));
  },
}).mount("#app");

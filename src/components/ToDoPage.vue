<template>
  <div class="to-do-page">
    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todos" :key="todo.id">
          <td>{{ todo.id }}</td>
          <td>
            <input
              v-if="todo.isActive"
              type="text"
              v-model="todo.name"
              @blur="updateTodo"
            />{{ todo.name }}
          </td>
          <td>{{ todo.age }}</td>
          <td>{{ todo.email }}</td>
          <td>{{ todo.phone }}</td>
          <td><button @click="EditTodo(todo.id)">Edit</button></td>
          <td><button @click="DeleteTodo(todo.id)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todos: null,
      isActive: false,
    };
  },
  methods: {
    getTodos() {
      fetch("http://localhost:3000/todos/", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Todos", data);
          this.todos = data;
        });
    },
    DeleteTodo(id) {
      console.log("id", id);
      fetch("http://localhost:3000/todos/" + id, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Todos", data);
          this.getTodos();
        });
    },
    EditTodo(id) {
      console.log("edit", id);
      const [obj] = this.todos.filter((todo) => todo.id === id);
      console.log("obj", { title: "title", ...obj });
      fetch("http://localhost:3000/todos/" + id, {
        method: "PATCH",
        body: JSON.stringify({
          id: 3,
          name: "Steve",
          age: 40,
          email: "Steve@gmail.com",
          phone: "0123456789",
          isActive: false,
        }),
        // headers: {
        //   "Content-typ": "application/json; charset=UTF-8",
        // },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Todos", data);
          this.getTodos();
        });
    },
    updateTodo(id) {
      console.log("input blur", id);
    },
  },
  mounted() {
    this.getTodos();
  },
};
</script>
<style>
table {
  border-spacing: 0;
}
th,
td {
  padding: 10px 20px;
  border: 1px solid #000;
}
</style>

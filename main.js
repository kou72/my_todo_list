new Vue({
  el: "#app",
  data: {
    text: "",
    todos: [],
    user: null,
    isLoggedIn: false,
  },

  created: function () {},

  methods: {
    login: function () {
      this.isLoggedIn = true;
    },

    logout: function () {
      this.isLoggedIn = false;
    },

    addItem: function () {
      if (!this.text) return;
      const item = {
        id: Math.random().toString(32).substring(2),
        todo: this.text,
        done: false,
      };
      this.todos.push(item);
      this.text = "";
    },

    doneItem: function (item) {
      item.done = true;
    },
  },
});

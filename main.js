new Vue({
  el: "#app",
  data: {
    text: "",
    todos: [],
    user: null,
    isLoggedIn: false,
  },

  created: function () {
    firebase.auth().onAuthStateChanged((user) => {
      this.user = user ? user : null;
      this.isLoggedIn = user ? true : false;
      if (!user) return;

      const documentRef = firebase.firestore().collection("users").doc(this.user.uid).collection("todos");

      documentRef
        .where("done", "==", false)
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            this.todos.push(doc.data());
          });
        });
    });
  },

  methods: {
    login: function () {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    },

    logout: function () {
      firebase.auth().signOut();
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
      if (this.isLoggedIn) this.insertDb(item);
    },

    doneItem: function (item) {
      item.done = true;
      if (this.isLoggedIn) this.updateDb(item);
    },

    insertDb: function (item) {
      firebase.firestore().collection("users").doc(this.user.uid).collection("todos").doc(item.id).set({
        id: item.id,
        todo: item.todo,
        done: item.done,
        createdTime: firebase.firestore.FieldValue.serverTimestamp(),
      });
    },

    updateDb: function (item) {
      firebase.firestore().collection("users").doc(this.user.uid).collection("todos").doc(item.id).update({
        id: item.id,
        todo: item.todo,
        done: item.done,
        updatedTime: firebase.firestore.FieldValue.serverTimestamp(),
      });
    },
  },
});


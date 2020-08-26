new Vue({
  el: "#app",
  data: {
    text: "",
    todos: [],
    user: null,
    isLoggedIn: false,
  },

  created: function () {
    // TODO.3
    // firebase.auth().onAuthStateChanged((user) => {
    //   this.user = user ? user : null;
    //   this.isLoggedIn = user ? true : false;
      // TODO.4
      // if (!user) return;
      // const documentRef = firebase.firestore().collection("users").doc(this.user.uid).collection("todos");
      // documentRef
      //   .where("done", "==", false)
      //   .get()
      //   .then((snapshot) => {
      //     snapshot.forEach((doc) => {
      //       this.todos.push(doc.data());
      //     });
      //   });
    // });
  },

  methods: {
    addItem: function () {
      // TODO.2
      // if (!this.text) return;
      // const item = {
      //   id: Math.random().toString(32).substring(2), // ランダム文字列をIDに設定
      //   todo: this.text,
      //   done: false,
      // };
      // this.todos.push(item);
      // this.text = "";
      // TODO.4
      // if (this.isLoggedIn) this.insertDb(item);
    },

    doneItem: function (item) {
      // TODO.2
      // item.done = true;
      // TODO.4
      // if (this.isLoggedIn) this.updateDb(item);
    },

    login: function () {
      // TODO.3
      // const provider = new firebase.auth.GoogleAuthProvider();
      // firebase.auth().signInWithRedirect(provider);
    },

    logout: function () {
      // TODO.3
      // firebase.auth().signOut();
    },

    insertDb: function (item) {
      // TODO.4
      // firebase.firestore().collection("users").doc(this.user.uid).collection("todos").doc(item.id).set({
      //   id: item.id,
      //   todo: item.todo,
      //   done: item.done,
      //   createdTime: firebase.firestore.FieldValue.serverTimestamp(),
      // });
    },

    updateDb: function (item) {
      // TODO.4
      // firebase.firestore().collection("users").doc(this.user.uid).collection("todos").doc(item.id).update({
      //   id: item.id,
      //   todo: item.todo,
      //   done: item.done,
      //   updatedTime: firebase.firestore.FieldValue.serverTimestamp(),
      // });
    },
  },
});

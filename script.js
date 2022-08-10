Vue.createApp({
  data() {
    return { tasks: [], enteredTask: "" };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
    //   console.log(this.enteredTask);
    },
  },
}).mount("#app");

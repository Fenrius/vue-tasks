Vue.createApp({
  data() {
    let timeNow = new Date();
    return {
      name: "John Doe",
      currentTime: timeNow.toLocaleString("en-US"),
    };
  },
}).mount("#app", "#time");

Vue.createApp({
  data() {
    return {
      count: 0,
      colorCount: 0,
    };
  },
  updated() {
    if (this.colorCount === 101) {
      this.colorCount = 0;
    }
  },
}).mount("#app");

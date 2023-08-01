Vue.createApp({
  data() {
    return {
      className: "backgroundColorSwitch",
      btnClass: "buttonSwitch",
    };
  },
  methods: {
    lightsOut() {
      document.body.classList.toggle(this.className);
      document.querySelector("button").classList.toggle(this.btnClass);
      if (document.body.classList.value === "backgroundColorSwitch") {
        document.title = "Good Night";
      } else {
        document.title = "Good Morning";
      }
    },
  },
}).mount("#app");

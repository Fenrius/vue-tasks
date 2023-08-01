Vue.createApp({
  data() {
    return {
      x: 12,
      y: 4,
      fruitBasket: [
        "🍏 Apple",
        "🍌 Banana",
        "🍉 Watermelon",
        "🫐 Blueberry",
        "🍓 Strawberry",
        "🍍 Pineapple",
        "🥭 Mango",
      ],
    };
  },
  methods: {
    removeBtn(removefruit) {
      return (this.fruitBasket = this.fruitBasket.filter((chooseFruit) => {
        return chooseFruit !== removefruit;
      }));
    },
  },
}).mount("#app");

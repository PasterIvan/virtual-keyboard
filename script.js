const Keyboard = {
  elements: {
    main: document.createElement("main"),
    text: document.createElement("textarea"),
    keyboard: document.createElement("div"),
  },

  init() {
    // Setup main elements
    this.elements.main.classList.add("main");
    this.elements.keyboard.classList.add("keyboard");
    this.elements.text.classList.add("text");

    // Add to DOM
    this.elements.main.appendChild(this.elements.text);
    this.elements.main.appendChild(this.elements.keyboard);

    document.body.appendChild(this.elements.main);
  },

};

window.addEventListener("DOMContentLoaded", function () {
  Keyboard.init();
});

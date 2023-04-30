const Body = {
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

    this.elements.keyboard.appendChild(this.createKeys());

    document.body.appendChild(this.elements.main);
  },

  createKeys() {
    const fragment = document.createDocumentFragment();
    const keys = [
      "§", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
      "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]","Enter",
      "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "|", "r-shift",
      "l-shift", "`", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "up",
      "fn", "ctr", "option", "command", "Space", "command", "option", "left", "down", "right"
    ];

    // Creates HTML for an icon
    keys.forEach(key => {
      const button = document.createElement("button");

      // Add attributes/classes
      button.setAttribute("type", "button");
      button.classList.add("button");


      switch (key) {
        case "Backspace":
          button.classList.add("button_backspace");

          break;
        case "tab":
          button.classList.add("button_tab");

          break;
        case "r-shift":
          button.classList.add("button_r-shift");

          break;
        case "l-shift":
          button.classList.add("button_r-shift");

          break;
        case "up":
          button.classList.add("button_up");

          break;
        case "Space":
          button.classList.add("button_space");

          break;
        case "command":
          button.classList.add("button_command");

          break;

        default:
          button.classList.add("button");


          break;
      }

      button.textContent = key.toLowerCase();
      fragment.appendChild(button);
    });

    return fragment;
  },
};

window.addEventListener("DOMContentLoaded", () => Body.init());

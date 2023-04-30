const Body = {
  elements: {
    main: document.createElement("main"),
    text: document.createElement("textarea"),
    keyboard: document.createElement("div"),
  },
  value: "",

  init() {
    // Setup main elements
    this.elements.main.classList.add("main");
    this.elements.keyboard.classList.add("keyboard");
    this.elements.text.classList.add("text");
    this.elements.text.value = this.value;
    this.elements.text.autofocus = true;

    // Add to DOM
    this.elements.main.appendChild(this.elements.text);
    this.elements.main.appendChild(this.elements.keyboard);

    this.elements.keyboard.appendChild(this.createKeys());

    document.body.appendChild(this.elements.main);

    document.querySelectorAll(".text").forEach(element => {
      element.addEventListener("focus", () => {
        element.value = this.value;
      });
    });

  },

  createKeys() {
    const fragment = document.createDocumentFragment();
    const keys = [
      "§", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
      "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]","Enter",
      "Caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "|", "r-shift",
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

          button.addEventListener("click", () => {
            this.value = this.value.slice(0, -1);
            document.querySelectorAll(".text").forEach(element => {
              element.value = this.value;
            });
          });

          document.addEventListener('keydown', (event) => {
            if (event.code === "Backspace") {
              button.classList.add("backspace-active");
            }
          });

          document.addEventListener('keyup', (event) => {
            if (event.code === "Backspace") {
              button.classList.remove("backspace-active");
            }
          });

          break;

        case "Enter":
          button.addEventListener("click", () => {
            document.querySelectorAll(".text").forEach(() => {
              this.value += "\n";
            });
          });

          document.addEventListener('keydown', (event) => {
            if (event.code === "Enter") {
              button.classList.add("active");
            }
          });

          document.addEventListener('keyup', (event) => {
            if (event.code === "Enter") {
              button.classList.remove("active");
            }
          });

          break;

        case "Tab":
          button.classList.add("button_tab");

          document.addEventListener('keydown', (event) => {
            if (event.code === "Tab") {
              button.classList.add("tab-active");
            }
          });

          document.addEventListener('keyup', (event) => {
            if (event.code === "Tab") {
              button.classList.remove("tab-active");
            }
          });

          break;

        case "r-shift":
          button.classList.add("button_r-shift");

          document.addEventListener('keydown', (event) => {
            if (event.code === "ShiftRight") {
              button.classList.add("r-shift-active");
            }
          });

          document.addEventListener('keyup', (event) => {
            if (event.code === "ShiftRight") {
              button.classList.remove("r-shift-active");
            }
          });

          break;

        case "l-shift":
          button.classList.add("button_r-shift");

          document.addEventListener('keydown', (event) => {
            if (event.code === "ShiftLeft") {
              button.classList.add("l-shift-active");
            }
          });

          document.addEventListener('keyup', (event) => {
            if (event.code === "ShiftLeft") {
              button.classList.remove("l-shift-active");
            }
          });

          break;

          case "Caps":
          button.classList.add("button_cups");

          document.addEventListener('keydown', (event) => {
            if (event.code === "CapsLock") {
              button.classList.add("active");
            }
          });

          document.addEventListener('keyup', (event) => {
            if (event.code === "CapsLock") {
              button.classList.remove("active");
            }
          });

          break;

        case "up":
          button.classList.add("button_up");

          document.addEventListener('keydown', (event) => {
            if (event.code === "ArrowUp") {
              button.classList.add("up-active");
            }
          });

          document.addEventListener('keyup', (event) => {
            if (event.code === "ArrowUp") {
              button.classList.remove("up-active");
            }
          });

          break;

        case "Space":
          button.classList.add("button_space");
          button.addEventListener("click", () => {
            this.value += " ";
          });

          document.addEventListener('keydown', (event) => {
            if (event.code === "Space") {
              button.classList.add("spase-active");
            }
          });

          document.addEventListener('keyup', (event) => {
            if (event.code === "Space") {
              button.classList.remove("spase-active");
            }
          });

          break;

        case "command":
          button.classList.add("button_command");

          break;

        default:
          button.classList.add("button");

          button.addEventListener("click", () => {
            this.value += key;
            document.querySelectorAll(".text").forEach(element => {
              element.value = this.value;
            });
          });

          document.addEventListener('keydown', (event) => {
            if (event.key === key) {
              button.classList.add("active");
            }
          });

          document.addEventListener('keyup', (event) => {
            if (event.key === key) {
              button.classList.remove("active");
            }
          });

          break;
      }

      button.addEventListener("click", () => {
        document.querySelectorAll(".text").forEach(element => {
          element.focus();
        });
      });

      button.textContent = key.toLowerCase();
      fragment.appendChild(button);
    });

    return fragment;
  },
};

window.addEventListener("DOMContentLoaded", () => Body.init());
document.addEventListener('keydown', (event) => {
  document.querySelectorAll(".text").forEach(element => {
    element.focus();
  });
  if (!event.metaKey) {
    Body.value += event.key
  }
});

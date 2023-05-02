const Body = {
  elements: {
    main: "",
    text: "",
    keyboard: "",
    description1: "",
    description2: ""
  },
  ln: 'en',
  value: "",
  caps: false,
  keys: {
    "Backquote": {l_en: "§", u_en: "±", l_ru: "ё", u_ru: "Ё"},
    "Digit1": {l_en: "1", u_en: "!", l_ru: "1", u_ru: "!"},
    "Digit2": {l_en: "2", u_en: "@", l_ru: "2", u_ru: "\""},
    "Digit3": {l_en: "3", u_en: "#", l_ru: "3", u_ru: "№"},
    "Digit4": {l_en: "4", u_en: "$", l_ru: "4", u_ru: ";"},
    "Digit5": {l_en: "5", u_en: "%", l_ru: "5", u_ru: "%"},
    "Digit6": {l_en: "6", u_en: "^", l_ru: "6", u_ru: ":"},
    "Digit7": {l_en: "7", u_en: "&", l_ru: "7", u_ru: "?"},
    "Digit8": {l_en: "8", u_en: "*", l_ru: "8", u_ru: "*"},
    "Digit9": {l_en: "9", u_en: "(", l_ru: "9", u_ru: "("},
    "Digit0": {l_en: "0", u_en: ")", l_ru: "0", u_ru: ")"},
    "Minus": {l_en: "-", u_en: "_", l_ru: "-", u_ru: "_"},
    "Equal": {l_en: "=", u_en: "+", l_ru: "=", u_ru: "+"},
    "Backspace": {l_en: "Backspace", u_en: "Backspace", l_ru: "Backspace", u_ru: "Backspace"},
    "Tab": {l_en: "Tab", u_en: "Tab", l_ru: "Tab", u_ru: "Tab"},
    "KeyQ": {l_en: "q", u_en: "Q", l_ru: "й", u_ru: "Й"},
    "KeyW": {l_en: "w", u_en: "W", l_ru: "ц", u_ru: "Ц"},
    "KeyE": {l_en: "e", u_en: "E", l_ru: "у", u_ru: "У"},
    "KeyR": {l_en: "r", u_en: "R", l_ru: "к", u_ru: "К"},
    "KeyT": {l_en: "t", u_en: "T", l_ru: "е", u_ru: "Е"},
    "KeyY": {l_en: "y", u_en: "Y", l_ru: "н", u_ru: "Н"},
    "KeyU": {l_en: "u", u_en: "U", l_ru: "г", u_ru: "Г"},
    "KeyI": {l_en: "i", u_en: "I", l_ru: "ш", u_ru: "Ш"},
    "KeyO": {l_en: "o", u_en: "O", l_ru: "щ", u_ru: "Щ"},
    "KeyP": {l_en: "p", u_en: "P", l_ru: "з", u_ru: "З"},
    "BracketLeft": {l_en: "[", u_en: "{", l_ru: "х", u_ru: "Х"},
    "BracketRight": {l_en: "]", u_en: "}", l_ru: "ъ", u_ru: "Ъ"},
    "Enter": {l_en: "Enter", u_en: "Enter", l_ru: "Enter", u_ru: "Enter"},
    "CapsLock": {l_en: "Caps", u_en: "Caps", l_ru: "Caps", u_ru: "Caps"},
    "KeyA": {l_en: "a", u_en: "A", l_ru: "ф", u_ru: "Ф"},
    "KeyS": {l_en: "s", u_en: "S", l_ru: "ы", u_ru: "Ы"},
    "KeyD": {l_en: "d", u_en: "D", l_ru: "в", u_ru: "В"},
    "KeyF": {l_en: "f", u_en: "F", l_ru: "а", u_ru: "А"},
    "KeyG": {l_en: "g", u_en: "G", l_ru: "п", u_ru: "П"},
    "KeyH": {l_en: "h", u_en: "H", l_ru: "р", u_ru: "Р"},
    "KeyJ": {l_en: "j", u_en: "J", l_ru: "о", u_ru: "О"},
    "KeyK": {l_en: "k", u_en: "K", l_ru: "л", u_ru: "Л"},
    "KeyL": {l_en: "l", u_en: "L", l_ru: "д", u_ru: "Д"},
    "Semicolon": {l_en: ";", u_en: ":", l_ru: "ж", u_ru: "Ж"},
    "Quote": {l_en: "'", u_en: "\"", l_ru: "э", u_ru: "Э"},
    "Backslash": {l_en: "\\", u_en: "|", l_ru: "\\", u_ru: "/"},
    "ShiftRight": {l_en: "Shift", u_en: "Shift", l_ru: "Shift", u_ru: "Shift"},
    "ShiftLeft": {l_en: "Shift", u_en: "Shift", l_ru: "Shift", u_ru: "Shift"},
    "IntlBackslash": {l_en: "`", u_en: "~", l_ru: "]", u_ru: "["},
    "KeyZ": {l_en: "z", u_en: "Z", l_ru: "я", u_ru: "Я"},
    "KeyX": {l_en: "x", u_en: "X", l_ru: "ч", u_ru: "Ч"},
    "KeyC": {l_en: "c", u_en: "C", l_ru: "с", u_ru: "С"},
    "KeyV": {l_en: "v", u_en: "V", l_ru: "м", u_ru: "М"},
    "KeyB": {l_en: "b", u_en: "B", l_ru: "и", u_ru: "И"},
    "KeyN": {l_en: "n", u_en: "N", l_ru: "т", u_ru: "Т"},
    "KeyM": {l_en: "m", u_en: "M", l_ru: "ь", u_ru: "Ь"},
    "Comma": {l_en: ",", u_en: "<", l_ru: "б", u_ru: "Б"},
    "Period": {l_en: ".", u_en: ">", l_ru: "ю", u_ru: "Ю"},
    "Slash": {l_en: "/", u_en: "?", l_ru: ".", u_ru: ","},
    "ArrowUp": {l_en: "Up", u_en: "Up", l_ru: "Up", u_ru: "Up"},
    "fn": {l_en: "fn", u_en: "fn", l_ru: "fn", u_ru: "fn"},
    "ControlLeft": {l_en: "Ctr", u_en: "Ctr", l_ru: "Ctr", u_ru: "Ctr"},
    "AltLeft": {l_en: "Option", u_en: "Option", l_ru: "Option", u_ru: "Option"},
    "MetaLeft": {l_en: "Command", u_en: "Command", l_ru: "Command", u_ru: "Command"},
    "Space": {l_en: " ", u_en: " ", l_ru: " ", u_ru: " "},
    "MetaRight": {l_en: "Command", u_en: "Command", l_ru: "Command", u_ru: "Command"},
    "AltRight": {l_en: "Option", u_en: "Option", l_ru: "Option", u_ru: "Option"},
    "ArrowLeft": {l_en: "Left", u_en: "Left", l_ru: "Left", u_ru: "Left"},
    "ArrowDown": {l_en: "Down", u_en: "Down", l_ru: "Down", u_ru: "Down"},
    "ArrowRight": {l_en: "Right", u_en: "Right", l_ru: "Right", u_ru: "Right"},
  },

  init() {
    // Setup main elements
    this.elements.main = document.createElement("main")
    this.elements.text = document.createElement("textarea")
    this.elements.keyboard = document.createElement("div")
    this.elements.description1 = document.createElement("p")
    this.elements.description2 = document.createElement("p")
    this.elements.main.classList.add("main");
    this.elements.keyboard.classList.add("keyboard");
    this.elements.description1.classList.add("description");
    this.elements.description2.classList.add("description");
    this.elements.text.classList.add("text");
    this.elements.text.value = this.value;
    this.elements.text.autofocus = true;
    this.elements.description1.textContent = "Клавиатура создана в операционной системе MacOS"
    this.elements.description2.textContent = "Для переключения языка: fn"


    // Add to DOM
    this.elements.main.append(this.elements.text);
    this.elements.main.append(this.elements.keyboard);
    this.elements.main.append(this.elements.description1);
    this.elements.main.append(this.elements.description2);

    this.elements.keyboard.append(this.createKeys());

    document.body.append(this.elements.main);

    document.querySelectorAll(".text").forEach(element => {
      element.addEventListener("focus", () => {
        element.value = this.value;
      });
    });

  },

  createKeys() {
    const fragment = document.createDocumentFragment();
    const keys = this.keys;

    // Creates HTML for an icon
    for (let key in keys) {
      const button = document.createElement("button");

      // Add attributes/classes
      button.setAttribute("type", "button");
      button.classList.add("button");

      switch (key) {
        case "Backspace":
          button.classList.add("button_backspace");
          button.id = key

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
          button.id = key

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
          button.id = key

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

        case "ShiftRight":
          button.classList.add("button_r-shift");
          button.id = key
          this.updateKeys(button, "mousedown")
          this.updateKeys(button, "mouseup")

          document.addEventListener('keydown', (event) => {
            if (event.code === "ShiftRight") {
              button.classList.add("r-shift-active");
              this.caps = true
            }
          });

          document.addEventListener('keyup', (event) => {
            if (event.code === "ShiftRight") {
              button.classList.remove("r-shift-active");
              this.caps = false
            }
          });

          break;

        case "ShiftLeft":
          button.classList.add("button_r-shift");
          button.id = key
          this.updateKeys(button, "mousedown")
          this.updateKeys(button, "mouseup")

          document.addEventListener('keydown', (event) => {
            if (event.code === "ShiftLeft") {
              button.classList.add("l-shift-active");
              this.caps = true
            }
          });

          document.addEventListener('keyup', (event) => {
            if (event.code === "ShiftLeft") {
              button.classList.remove("l-shift-active");
              this.caps = false
            }
          });

          break;

        case "CapsLock":
          button.classList.add("button_cups");
          button.id = key

          button.addEventListener('mousedown', () => {
            this.caps = !this.caps
            button.classList.toggle("active");
            let buttons = document.querySelectorAll('button')
            buttons.forEach((key) => {
              this.switchBtn(key)
            })
          });

          document.addEventListener('keydown', (event) => {
            if (event.code === "CapsLock") {
              button.classList.add("active");
              this.caps = !this.caps
            }
          });
          document.addEventListener('keyup', (event) => {
            if (event.code === "CapsLock") {
              button.classList.remove("active");
              this.caps = !this.caps
            }
          });

          break;

        case "ArrowUp":
          button.classList.add("button_up");
          button.id = key

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

        case "ControlLeft":
          button.classList.add("button");
          button.id = key

          document.addEventListener('keydown', (event) => {
            if (event.code === "ControlLeft") {
              button.classList.add("active");
            }
          });

          document.addEventListener('keyup', (event) => {
            if (event.code === "ControlLeft") {
              button.classList.remove("active");
            }
          });

          break;

        case "AltLeft":
          button.classList.add("button");
          button.id = key

          document.addEventListener('keydown', (event) => {
            if (event.code === "AltLeft") {
              button.classList.add("active");
            }
          });

          document.addEventListener('keyup', (event) => {
            if (event.code === "AltLeft") {
              button.classList.remove("active");
            }
          });

          break;
        case "AltRight":
          button.classList.add("button");
          button.id = key

          document.addEventListener('keydown', (event) => {
            if (event.code === "AltRight") {
              button.classList.add("active");
            }
          });

          document.addEventListener('keyup', (event) => {
            if (event.code === "AltRight") {
              button.classList.remove("active");
            }
          });

          break;

        case "ArrowLeft":
          button.classList.add("button");
          button.id = key

          document.addEventListener('keydown', (event) => {
            if (event.code === "ArrowLeft") {
              button.classList.add("active");
            }
          });

          document.addEventListener('keyup', (event) => {
            if (event.code === "ArrowLeft") {
              button.classList.remove("active");
            }
          });

          break;

        case "ArrowRight":
          button.classList.add("button");
          button.id = key

          document.addEventListener('keydown', (event) => {
            if (event.code === "ArrowRight") {
              button.classList.add("active");
            }
          });

          document.addEventListener('keyup', (event) => {
            if (event.code === "ArrowRight") {
              button.classList.remove("active");
            }
          });

          break;

        case "ArrowDown":
          button.classList.add("button");
          button.id = key

          document.addEventListener('keydown', (event) => {
            if (event.code === "ArrowDown") {
              button.classList.add("active");
            }
          });

          document.addEventListener('keyup', (event) => {
            if (event.code === "ArrowDown") {
              button.classList.remove("active");
            }
          });

          break;

        case "Space":
          button.classList.add("button_space");
          button.id = key
          button.addEventListener("click", () => {
            this.value += " "
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

        case "fn":
          button.id = key

          button.addEventListener("click", () => {
            this.value += "";
            this.ln = this.ln === 'en' ? 'ru' : 'en'
            let buttons = document.querySelectorAll('button')
            buttons.forEach((key) => {
              this.switchBtn(key)
              document.querySelectorAll(".text").forEach(element => {
                element.value = this.value;
              });
            })
          });

          break;

        case "MetaLeft":
          button.classList.add("button_command");
          button.id = key

          break;

        case "MetaRight":
          button.classList.add("button_command");
          button.id = key

          break;

        default:
          button.classList.add("button");
          button.id = key
          button.addEventListener("click", () => {
            this.switchValue(key)
            document.querySelectorAll(".text").forEach(element => {
              element.value = this.value;
            });
          });

          document.addEventListener('keydown', (event) => {
            if (event.code === key) {
              button.classList.add("active");
              this.switchBtn(key)
              document.querySelectorAll(".text").forEach(element => {
                element.value = this.value;
              });
            }
          });

          document.addEventListener('keyup', (event) => {
            if (event.code === key) {
              button.classList.remove("active");
              document.querySelectorAll(".text").forEach(element => {
                element.value = this.value;
              });
            }
          });

          break;
      }

      button.addEventListener("click", () => {
        document.querySelectorAll(".text").forEach(element => {
          element.focus();
        });
      });

      button.textContent = this.caps ? this.keys[key].u_en : this.keys[key].l_en;
      fragment.appendChild(button);

    }
    return fragment;
  },
  updateKeys(btn, e){
    btn.addEventListener(e, () => {
      this.caps = !this.caps
      let buttons = document.querySelectorAll('button')
      buttons.forEach((key) => {
        this.switchBtn(key)
        document.querySelectorAll(".text").forEach(element => {
          element.value = this.value;
        });
      })
    });
  },
  switchBtn(key) {
    switch (this.ln) {
      case "en":
        key.textContent = this.caps
            ? this.keys[key.id] && this.keys[key.id].u_en
            : this.keys[key.id] && this.keys[key.id].l_en;
        break
      case "ru":
        key.textContent = this.caps
            ? this.keys[key.id] && this.keys[key.id].u_ru
            : this.keys[key.id] && this.keys[key.id].l_ru;
        break
    }
  },
  switchValue(key) {
    switch (this.ln) {
      case "en":
        this.value += this.caps
            ? this.keys[key] && this.keys[key].u_en
            : this.keys[key] && this.keys[key].l_en;
        break
      case "ru":
        this.value += this.caps
            ? this.keys[key] && this.keys[key].u_ru
            : this.keys[key] && this.keys[key].l_ru;
        break
    }
  }
};
const updateKeys = () => {
  let button = document.querySelectorAll('button')
  button.forEach((key) => {
    switch (Body.ln) {
      case "en":
        key.textContent = Body.caps
            ? Body.keys[key.id] && Body.keys[key.id].u_en
            : Body.keys[key.id] && Body.keys[key.id].l_en;
        break
      case "ru":
        key.textContent = Body.caps
            ? Body.keys[key.id] && Body.keys[key.id].u_ru
            : Body.keys[key.id] && Body.keys[key.id].l_ru;
        break
    }
  })
}
window.addEventListener("DOMContentLoaded", () => Body.init());

document.addEventListener('keydown', (event) => {
  if (event.code === "ShiftLeft") {
    Body.caps = true
    updateKeys()
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === "ShiftLeft") {
    Body.caps = false
    updateKeys()
  }
});


document.addEventListener('keydown', (event) => {
  if (event.code === "ShiftRight") {
    Body.caps = true
    updateKeys()
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === "ShiftRight") {
    Body.caps = false
    updateKeys()
  }
});


window.addEventListener("keydown", (event) => {
  document.querySelectorAll(".text").forEach(element => {
    element.focus();
  });
  switch (event.code) {
    case "Backspace":
      Body.value = Body.value.slice(0, -1);
      break;

    case "Enter":
      Body.value += "\n";
      break;

    case "CapsLock":
      Body.caps = true
      updateKeys()
      break;

    case "ShiftRight":
      Body.value += "";
      break;

    case "Tab":
      Body.value += "  ";
      break;

    case "ShiftLeft":
      Body.value += "";
      break;

    case "ControlLeft":
      Body.value += "";
      break;

    case "AltLeft":
      Body.value += "";
      break;

    case "AltRight":
      Body.value += "";
      break;

    case "ArrowDown":
      Body.value += "";
      break;

    case "ArrowLeft":
      Body.value += "";
      break;

    case "ArrowRight":
      Body.value += "";
      break;

    case "ArrowUp":
      Body.value += "";
      break;

    case "MetaLeft":
      Body.value += "";
      break;

    case "MetaRight":
      Body.value += "";
      break;

    case "Space":
      Body.value += " ";
      break;
    default:
      switch (Body.ln) {
        case "en":
          Body.value += Body.caps
              ? Body.keys[event.code] && Body.keys[event.code].u_en
              : Body.keys[event.code] && Body.keys[event.code].l_en;
          break
        case "ru":
          Body.value += Body.caps
              ? Body.keys[event.code] && Body.keys[event.code].u_ru
              : Body.keys[event.code] && Body.keys[event.code].l_ru;
          break
      }
  }
});
window.addEventListener("keyup", (event) => {
  document.querySelectorAll(".text").forEach(element => {
    element.focus();
  });
  switch (event.code) {
    case "Backspace":
      Body.value = Body.value.slice(0, -1);
      break;

    case "Enter":
      Body.value += "";
      break;

    case "CapsLock":
      Body.caps = false
      updateKeys()
      break;

    case "Tab":
      Body.value += "";
      break;

    case "ShiftRight":
      Body.value += "";
      break;

    case "ShiftLeft":
      Body.value += "";
      break;

    case "ControlLeft":
      Body.value += "";
      break;

    case "AltLeft":
      Body.value += "";
      break;

    case "AltRight":
      Body.value += "";
      break;

    case "ArrowDown":
      Body.value += "";
      break;

    case "ArrowUp":
      Body.value += "";
      break;

    case "ArrowLeft":
      Body.value += "";
      break;

    case "ArrowRight":
      Body.value += "";
      break;

    case "MetaLeft":
      Body.value += "";
      break;

    case "MetaRight":
      Body.value += "";
      break;

    case "Space":
      Body.value += "";
      break;

    default:

  }
});

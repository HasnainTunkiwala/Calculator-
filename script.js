const display = document.getElementById("display");
const buttons = document.getElementById("buttons");

const keys = [
  "7", "8", "9", "/",
  "4", "5", "6", "*",
  "1", "2", "3", "-",
  "0", ".", "C", "+",
  "="
];

keys.forEach(char => {
  const btn = document.createElement("button");
  btn.textContent = char;

  if (char === "C") {
    btn.classList.add("clear");
  } else if (["/", "*", "-", "+"].includes(char)) {
    btn.classList.add("operator");
  } else if (char === "=") {
    btn.classList.add("equal");
  } else {
    btn.classList.add("number");
  }

  btn.onclick = () => press(char);
  buttons.appendChild(btn);
});

function press(val) {
  if (val === "=") {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  } else if (val === "C") {
    display.value = "";
  } else {
    display.value += val;
  }
}

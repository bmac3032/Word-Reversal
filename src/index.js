import "./styles.css";

const word = document.getElementById("word"),
  output = document.getElementById("reversed"),
  btn = document.getElementById("btn");

btn.addEventListener("click", getInput);
word.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    getInput();
  }
});

function getInput() {
  let input = word.value;
  console.log(`Original : ${input}`);
  console.log(`Reversed : ${reverseString(input)}`);
  output.innerText = reverseString(input);
  word.value = "";
}

// Write a function that reverses a string
// reverseString('Hello') becomes 'olleh'

// 1.) Using Built-in functions
function reverseString(str) {
  // Split the string into a new array
  let splitString = str.split("");
  // Reverse the array
  let reverseString = splitString.reverse();
  // Join the new array back into a string
  let joinArray = reverseString.join("");

  return joinArray;
}

const inputOne = document.querySelector("#inputOne");
const inputTwo = document.querySelector("#inputTwo");
const inputThree = document.querySelector("#inputThree");
const calculateOne = document.querySelector("#calculateOne");
const resultOne = document.querySelector("#resultOne");
const optionOne = document.querySelector("#optionOne");
const optionTwo = document.querySelector("#optionTwo");
const optionThree = document.querySelector("#optionThree");
const calculateOneTwo = document.querySelector("#calculateTwo");
const resultTwo = document.querySelector("#resultTwo");

// Parte 1
const borderButton = document.querySelector("#borderButton");
let estate = 0;
borderButton.addEventListener("click", () => {
  let borderBtn = document.getElementById("borderButton");
  if (estate === 0) {
    borderBtn.classList.remove("noborders");
    borderBtn.classList.add("borders");
    estate = 1;
    return;
  }
  borderBtn.classList.remove("borders");
  borderBtn.classList.add("noborders");
  estate = 0;
});
// Parte 2
calculateOne.addEventListener("click", () => {
  let amountOne =
    parseFloat(inputOne.value) +
    parseFloat(inputTwo.value) +
    parseFloat(inputThree.value);
  if (inputOne.value.length === 0) {
    inputOne.value = "0";
    return;
  }
  if (inputTwo.value.length === 0) {
    inputTwo.value = "0";
    return;
  }
  if (inputThree.value.length === 0) {
    inputThree.value = "0";
    return;
  }
  if (amountOne <= 10) {
    resultOne.innerHTML = `<b>llevas: ${amountOne} sticker</b>`;
  } else {
    resultOne.innerHTML = `<b>Llevas demasiados stickers</b>`;
  }
});
// Parte 3
calculateTwo.addEventListener("click", () => {
  const amountTwo = optionOne.value + optionTwo.value + optionThree.value;
  console.log(amountTwo);
  if (amountTwo === "911") {
    resultTwo.innerHTML = `<b>password 1 correcto</b>`;
  } else {
    resultTwo.innerHTML = `<b>password incorrecto</b>`;
  }
  if (amountTwo === "714") {
    resultTwo.innerHTML = `<b>password 2 correcto</b>`;
    return;
  }
});

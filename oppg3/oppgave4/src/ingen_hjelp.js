import "./styles.css";

//Kan hende det må en kjapp refresh for at alt skal funke some planlagt

// TODO: Bruk getElementById til å hente HTML-elementene med #id
// TODO: Bruk querySelector til å hente knappen
// TODO: Lag en liste med tallene som skal sorteres
// TODO: Lag en funksjon for å skrive ut tallene som skal sorteres
// TODO: Lag en funksjon for å skrive ut input felter bruker kan skrive tallene i
// TODO: Lag en funksjon for å hente ut det brukeren har skrevet inn
// TODO: Lag en funksjon for å sjekke om tallene er sortert riktig av bruker
// TODO: Lag en funksjon som "lager UI" --Nødvendig?
// TODO: Lytt til 'click'-event og trigg checkNumberSeq ved klikk
const numbersUI = document.getElementById("numbers");
const guessUI = document.getElementById("guess");
const button = document.querySelector("button");
//Denne skaper noen problemer med at to eller flere like av et tall gir feil
//let numbers = Array.from({ length: 4 }, () => Math.floor(Math.random() * 40));
let numbers = [];

const generateRandomNumber = (upperLimit, starterValue) =>
  Math.floor(Math.random() * upperLimit + starterValue);

const generateNumber = (listLength) => {
  for (let i = 0; i < listLength; i++) {
    numbers.push(generateRandomNumber(20, 1));
  }
};

const getGuess = () => {
  const answers = guessUI.querySelectorAll("input");

  return Array.from(answers).map((answer) => answer.value);
};

const checkNumberSequence = () => {
  const guess = getGuess();

  let isCorrect = numbers.sort().join("") === guess.join("");
  if (isCorrect) {
    alert("Congratulations, you can count!");
  } else {
    alert("Learn to count");
  }
};

const addInputUI = () => {
  for (let number of numbers) {
    const li = `<li><input type="text" /></li>`;

    guessUI.innerHTML += li;
  }
};

const addNumbersUI = () => {
  for (let number of numbers) {
    const li = `<li>${number}</li>`;

    numbersUI.innerHTML += li;
  }
};

const createElementsUI = (numbers) => {
  generateNumber(numbers, 1);
  addNumbersUI();
  addInputUI();
};

createElementsUI(4);

button.addEventListener("click", checkNumberSequence);

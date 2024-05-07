const uzd1 = document.getElementById("uzd1");

const Futbolistas = class {
  constructor(speed, name, surname, height, age) {
    this.speed = speed;
    this.name = name;
    this.surname = surname;
    this.height = height;
    this.age = age;
  }
  getSpeed() {
    return this.speed;
  }
  getName() {
    return this.name;
  }
  getSurname() {
    return this.surname;
  }
  getHeight() {
    return this.height;
  }
  getAge() {
    return this.age;
  }
};

const Ronaldo = new Futbolistas(
  Math.floor(Math.random() * 10 + 1),
  "Cristiano",
  "Ronaldo",
  "1.87",
  39
);
const Ibrahimovic = new Futbolistas(
  Math.floor(Math.random() * 10 + 1),
  "Zlatan",
  "Ibrahimović",
  "1.95",
  42
);
const Messi = new Futbolistas(
  Math.floor(Math.random() * 10 + 1),
  "Lionel",
  "Messi",
  "1.70",
  36
);

const players = [Ronaldo, Ibrahimovic, Messi];
players.forEach((player, i) => {
  const pl = uzd1.appendChild(document.createElement("div"));
  const ident = pl.appendChild(document.createElement("p"));
  ident.innerText = `${
    i + 1
  } player is: ${player.getName()} ${player.getSurname()}`;
  const attr = pl.appendChild(document.createElement("p"));
  attr.innerText = `He is: ${player.getHeight()} tall and ${player.getAge()} years age.`;
  const sp = pl.appendChild(document.createElement("p"));
  sp.innerText = `His current speed is: ${player.getSpeed()} km/h.`;
});

const fastest = players.sort((a, b) => +b.getSpeed() - +a.getSpeed())[0];
const fast = uzd1.appendChild(document.createElement("div"));
const fast2 = fast.appendChild(document.createElement("p"));
fast2.innerText = `The fastest of them is: ${fastest.getName()} ${fastest.getSurname()}`;

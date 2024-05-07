// 1.

const btn1 = document.getElementById("btn1");
const rez1 = document.getElementById("rez1");

function runFunction() {
  rez1.innerText = "Mėgstu programuoti.Yey";
}

btn1.addEventListener("click", runFunction);

// 2.

const vaisius = document.getElementById("vaisius");
const kaina = document.getElementById("kaina");
const rez2 = document.getElementById("rez2");
const rez22 = document.getElementById("rez22");

function calculate() {
  if (vaisius.value.length == 0 || kaina.value.length == 0) {
    rez22.innerText = `Prašau užpildyti visus laukelius`;
  } else if (isNaN(kaina.value)) {
    rez22.innerText = `Kaina turi būti skaitmenys`;
  } else {
    rez22.innerText = `5 ${vaisius.value} kainuos: ${5 * +kaina.value} EUR`;
  }
}

rez2.addEventListener("click", calculate);

// 3.

const vaisius2 = document.getElementById("vaisius2");
const kaina2 = document.getElementById("kaina2");
const kiekis2 = document.getElementById("kiekis2");
const rez3 = document.getElementById("rez3");
const rez33 = document.getElementById("rez33");

function calculate2() {
  if (
    vaisius2.value.length == 0 ||
    kaina2.value.length == 0 ||
    kiekis2.value.length == 0
  ) {
    rez33.innerText = `Prašau užpildyti visus laukelius`;
  } else if (isNaN(kaina2.value) || isNaN(kiekis2.value)) {
    rez33.innerText = `Kaina/Kiekis turi būti skaitmenys`;
  } else {
    rez33.innerText = `${kiekis2.value} ${vaisius2.value} kainuos: ${
      +kiekis2.value * +kaina2.value
    } EUR`;
  }
}

rez3.addEventListener("click", calculate2);

// 4.

const cherojai = [
  { cherojus: "Lokys", savybe: "baltas" },
  { cherojus: "Lapė", savybe: "greita" },
  { cherojus: "Briedis", savybe: "triedziantis" },
  { cherojus: "Kiškis", savybe: "greitas" },
];

const hero_section = document.getElementById("hero-section");

cherojai.forEach((hero, i) => {
  const newHero = hero_section.appendChild(document.createElement("p"));
  newHero.innerText = `${i + 1} cherojus: ${hero.cherojus}. Savybė: ${
    hero.savybe
  }`;
  if (i % 2) {
    newHero.style.backgroundColor = "blue";
    newHero.style.color = "white";
  }
});

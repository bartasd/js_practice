console.clear();
// Marytė turi x obuolių, Jonukas y. Atspausdinti sumą:
const x = 20;
const y = 5;
let sum = x + y;
console.log("Marytė ir Jonukas turi: ", sum, " obuolių.");

// Parašyti sąlyga, kad kitamasis didėtų, o po to mažėtų per kažkokį z skaičių.
const z = 5;
sum += z;
console.log("Dabar jiedu turi: ", sum, " obuolių.");
sum -= z;
console.log("Dabar jiedu turi vėl: ", sum, " obuolių.");

// Parašyti sąlygą priklausomai nuo obuolių kiekio.
if (x == y) {
  console.log("Atiduokime obuolius Editai");
} else {
  console.log(
    `${x > y ? "Marytė" : "Jonukas"} turi daugiau obuolių negu ${
      x < y ? "Marytė" : "Jonukas"
    }`
  );
}

// Sąlyga su switch.
switch (sum) {
  case 25:
  case 50:
    console.log("Jūs turite: ", sum, " obuolių.");
    break;
  default:
    console.log("Jūs turite tiek obuolių, kiek nėra nurodyta turėti.");
}

// Masyvas vaisių.
const vaisiai = [
  "obuolys",
  "bananas",
  "apelsinas",
  "kriaušė",
  "mango",
  "ananasas",
];
console.log("3 masyvo elementas yra: ", vaisiai[2]);
console.log("5 masyvo elementas yra: ", vaisiai[4]);

console.log("Spausdiname visus vaisius:");
for (
  let i = 0;
  i < vaisiai.length;
  console.log(`${i + 1} vaisius yra: ${vaisiai[i++]}`)
);

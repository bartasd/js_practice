const uzd2 = document.getElementById("uzd2");

const Car = class {
  constructor(name, speed, odometer) {
    this.name = name;
    this.speed = speed;
    this.odometer = odometer;
  }
  getName() {
    return this.name;
  }
  getSpeed() {
    return this.speed;
  }
  getOdometer() {
    return this.odometer;
  }
};

const create = document.getElementById("createCars");
const cars = [];
const carTypes = ["Volvo", "Toyota", "Fiat", "Ferrari", "Citroen"];
function rnd() {
  return Math.floor(Math.random() * 5);
}
function rndOd() {
  return Math.floor(Math.random() * 100000);
}
function rndSpeed() {
  return Math.floor(Math.random() * 100);
}

function crtCars() {
  for (let i = 0; i < 5; i++) {
    const car = new Car(carTypes[rnd()], rndSpeed(), rndOd());
    cars.push(car);
  }
  cars.forEach((car, i) => {
    const pl = uzd2.appendChild(document.createElement("div"));
    const name = pl.appendChild(document.createElement("p"));
    name.innerText = `${i + 1} car is: ${car.getName()}`;
    const attr = pl.appendChild(document.createElement("p"));
    attr.innerText = `Its speed is: ${car.getSpeed()} km/h and it has accumulated ${car.getOdometer()} kilometers by now.`;
  });

  const mostKm = cars.sort((a, b) => +b.getOdometer() - +a.getOdometer())[0];
  const most = uzd2.appendChild(document.createElement("div"));
  const most2 = most.appendChild(document.createElement("p"));
  most2.innerText = `The car accumulated most of kilometers is: ${mostKm.getName()} whose speed is: ${mostKm.getSpeed()} and it has accumulated: ${mostKm.getOdometer()} km.`;
}

create.addEventListener("click", crtCars);

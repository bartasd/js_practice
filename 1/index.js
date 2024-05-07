// 1. PAPRASTAI SUKURTAS HTML'e.

// 2.
const div = document.body.appendChild(document.createElement("div"));
div.setAttribute("id", "moku2");
div.style.width = "300px";
div.style.height = "300px";
div.style.backgroundColor = "green";
div.style.display = "flex";
div.style.justifyContent = "center";
div.style.alignItems = "center";
div.style.color = "white";
div.style.fontSize = "32px";
div.innerText = "Valio pavyko";

const button = document.body.appendChild(document.createElement("div"));
button.setAttribute("id", "spaudaliukas");
button.style.width = "120px";
button.style.height = "50px";
button.style.backgroundColor = "blue";
button.innerText = "SPAUSTI!";
button.style.color = "white";
button.style.fontSize = "24px";
button.style.display = "flex";
button.style.justifyContent = "center";
button.style.alignItems = "center";

function doJob() {
  div.remove();
  button.remove();
}

button.addEventListener("click", doJob);

// 3.
const ytBtn = document.body.appendChild(document.createElement("div"));
ytBtn.setAttribute("id", "spaudaliukas");
ytBtn.style.width = "150px";
ytBtn.style.height = "50px";
ytBtn.style.backgroundColor = "yellow";
ytBtn.innerText = "KARAMBA!";
ytBtn.style.color = "white";
ytBtn.style.fontSize = "24px";
ytBtn.style.display = "flex";
ytBtn.style.justifyContent = "center";
ytBtn.style.alignItems = "center";

function watch() {
  ytBtn.remove();
  const frame = document.body.appendChild(document.createElement("iframe"));
  frame.setAttribute("id", "KARAMBA");
  frame.setAttribute(
    "src",
    "https://www.youtube.com/watch?v=QE19GKCwIw0?autoplay=1&mute=1&controls=1"
  );
  frame.style.width = "427px";
  frame.style.height = "240px";
}

ytBtn.addEventListener("click", watch);

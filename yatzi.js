const terningWrapper = document.querySelector("#terning-wrapper");
const kastButton = document.querySelector("button#kast");
const kastNr = document.querySelector("#kast-nr");
const brett = document.querySelector(".yatzi-game");
const tid = document.querySelector(".tid");

const timer = setInterval(() => {
  tid.textContent = Number(tid.textContent) + 1;
}, 1000);


let ferdig = false;

lagTerninger(terningWrapper);

function lagTerninger(parent) {
  for (let i = 0; i < 10; i++) {
    const terning = document.createElement("div");
    terning.textContent = randomTall();
    terning.classList.add("terning")
    terning.addEventListener("click", () => {
      if (ferdig) {
        return;
      }
      terning.classList.toggle("valgt");
      ferdig = erFerdig();
      if (ferdig) {
        brett.classList.add("ferdig");
        clearInterval(timer);
      }
    });
    parent.append(terning);
  }
}

function selectTerninger(parent) {
  return parent.querySelectorAll(".terning");
}

function selectUvalgteTerninger(parent) {
  return Array.from(selectTerninger(parent))
    .filter(terning => !terning.classList
      .contains("valgt"))
}

function selectValgteTerninger(parent) {
  return Array.from(selectTerninger(parent)).filter(terning => terning.classList.contains("valgt"))
}

function erFerdig() {
  const valgte = selectValgteTerninger(terningWrapper);
  if (valgte.length != 10) {
    return false;
  }
  for (let i = 0; i < 10; i++) {
    if (valgte[i].textContent != valgte[0].textContent) {
      return false;
    }
  }
  return true;
}

function randomTall() {
  return Math.floor(Math.random() * 6) + 1
}

kastButton.addEventListener("click", () => {
  if (ferdig) {
    return;
  }
  const currentKastNr = Number(kastNr.textContent);
  kastNr.textContent = currentKastNr + 1;
  const terninger = selectUvalgteTerninger(terningWrapper);
  terninger.forEach(terning => terning.textContent = randomTall());
})

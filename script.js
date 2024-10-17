const count = document.querySelector("#count");
const incrementButton = document.querySelector("button#increment");
const decrimentButton = document.querySelector("button#decriment");
const saveButton = document.querySelector("button#save");
const saveHistory = document.querySelector("#history");
const saveKey = "saveHistory";
const deleteButton = document.querySelector("button#delete");

saveHistory.innerHTML = localStorage.getItem(saveKey);



incrementButton.addEventListener("click", () => {
  const currentCount = Number(count.textContent);
  count.textContent = currentCount + 1;
});

decrimentButton.addEventListener("click", () => {
  const currentCount = Number(count.textContent);
  if (currentCount <= 0) {
    return;
  }
  count.textContent = currentCount - 1;
});

saveButton.addEventListener("click", () => {
  const currentCount = Number(count.textContent);
  if (currentCount == 0) {
    return;
  }
  count.textContent = 0;
  const li = document.createElement("li");
  li.textContent = currentCount;
  saveHistory.append(li);
  localStorage.setItem(saveKey, saveHistory.innerHTML);
});

deleteButton.addEventListener("click", () => {
  if (!confirm("Er du sikker på at du vil slette alt?")) {
    return
  }
  saveHistory.innerHTML = "";
  localStorage.removeItem(saveKey);
});

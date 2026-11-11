let n;

do {
  n = Number(prompt("Enter the grid size (1–60):"));

  if (!Number.isInteger(n) || n < 1 || n > 60) {
    alert("Enter a whole number from 1 to 60.");
  }
} while (!Number.isInteger(n) || n < 1 || n > 60);

const container = document.querySelector("#Grid");
container.replaceChildren(); // Clear any existing boxes

for (let i = 0; i < n * n; i++) {
  const box = document.createElement("div");
  box.classList.add("box");

  box.style.width = `${100 / n}%`;
  box.style.height = `${100 / n}%`;

  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "black";
  });

  container.appendChild(box);
}

const btn = document.querySelector("#reset");

btn.addEventListener("click", () => {
  document.querySelectorAll(".box").forEach(box => {
    box.style.backgroundColor = "white";
  });
});

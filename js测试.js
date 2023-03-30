const btn = document.querySelector("button");
const h1 = document.querySelector("h1");

h1.innerHTML = 1;

let value = 1;
btn.addEventListener("click", () => {
  value++;
  h1.innerHTML = value;
});

const search = document.getElementById("search");
const cards = [...document.querySelectorAll(".card")];
const filters = [...document.querySelectorAll(".filter")];
const empty = document.getElementById("empty");

let genre = "all";

function render() {
  const q = search.value.trim().toLowerCase();
  let shown = 0;
  cards.forEach(card => {
    const title = card.dataset.title.toLowerCase();
    const cardGenre = card.dataset.genre;
    const okText = title.includes(q);
    const okGenre = genre === "all" || cardGenre === genre;
    const visible = okText && okGenre;
    card.classList.toggle("hidden", !visible);
    if (visible) shown++;
  });
  empty.classList.toggle("hidden", shown !== 0);
}

search.addEventListener("input", render);

filters.forEach(button => {
  button.addEventListener("click", () => {
    filters.forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    genre = button.dataset.genre;
    render();
  });
});

function showMessage(text) {
  const toast = document.getElementById("toast");
  toast.textContent = text;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2600);
}

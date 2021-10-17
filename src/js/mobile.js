const program = document.querySelector(".programs");

program.addEventListener("click", toggleOpen);
function toggleOpen(ev) {
  if (
    ev.target.className === "module" ||
    ev.target.className === "module bg-visible"
  ) {
    ev.target.classList.toggle("bg-visible");
    ev.target.nextElementSibling.classList.toggle("visible");
  }
}

import "./sass/main.scss";

import Api from "./js/baseApi";
import MarcupProgram from "./template/program.hbs";
import "./js/mobile";

const items = document.querySelector(".programs");

async function createMarcup() {
  try {
    const marcup = await Api();

    if (marcup.length === 0) {
      return alert("Упс... Попробуйте обновить страницу...");
    }

    items.insertAdjacentHTML("beforeend", MarcupProgram(marcup.slice(0, 5)));
  } catch (error) {
    alert("Упс... Попробуйте обновить страницу...");
  }
}

createMarcup();

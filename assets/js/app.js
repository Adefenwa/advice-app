import { API_URL } from "./config.js";
const adviceEL = document.querySelector(".advice--text");
const adviceID = document.querySelector(".advice--id");
const btn = document.querySelector(".dice");
// 1. Fetch API
const loadAPI = async function () {
  try {
    const data = await fetch(`${API_URL}`);
    const { slip } = await data.json();

    adviceEL.textContent = slip.advice;
    adviceID.textContent = `#${slip.id}`;
  } catch (error) {
    adviceEL.textContent = `${error.message}`;
  }
};

btn.addEventListener("click", loadAPI);

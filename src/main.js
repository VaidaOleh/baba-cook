import { getRecipes } from "./js/modules/getTopRecipes.js";
document.addEventListener("DOMContentLoaded", async function () {
  await getRecipes();
});

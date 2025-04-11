import { createHeader } from "./js/modules/header.js";
import { getRecipes } from "./js/modules/getTopRecipes.js";
document.addEventListener("DOMContentLoaded", async function () {
    await createHeader();
    await getRecipes();
})
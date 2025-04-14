async function loadRecipes() {
    try {
      const response = await fetch("../../recipes.json");
      const recipes = await response.json();
  
      // Фільтрація рецептів за категорією "Обідні"
      const filteredRecipes = recipes.filter(
        (recipe) => recipe.category === "Святкові"
      );
  
      const container = document.getElementById("recipes-container");
      container.innerHTML = ""; // Очищаємо контейнер перед додаванням нових елементів
  
      filteredRecipes.forEach((recipe) => {
        // Створюємо карточку рецепта
        const card = document.createElement("div");
        card.className = "card mb-4";
        card.style.width = "18rem";
  
        // Додаємо зображення
        const img = document.createElement("img");
        img.src = recipe.image;
        img.className = "card-img-top";
        img.alt = recipe.title;
  
        // Створюємо тіло карточки
        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
  
        // Додаємо заголовок
        const title = document.createElement("h5");
        title.className = "card-title";
        title.textContent = recipe.title;
  
        // Додаємо інформацію про час та калорії
        const info = document.createElement("p");
        info.className = "card-text";
        info.innerHTML = `<strong>Час:</strong> ${recipe.cookTime}<br><strong>Калорії:</strong> ${recipe.calories}`;
  
        // Додаємо кнопку деталей
        const button = document.createElement("button");
        button.className = "btn btn-primary";
        button.textContent = "Деталі рецепту";
        button.setAttribute("data-bs-toggle", "modal");
        button.setAttribute("data-bs-target", `#recipeModal${recipe.id}`);
  
        // Збираємо карточку
        cardBody.appendChild(title);
        cardBody.appendChild(info);
        cardBody.appendChild(button);
        card.appendChild(img);
        card.appendChild(cardBody);
        container.appendChild(card);
  
        // Створюємо модальне вікно
        createRecipeModal(recipe);
      });
    } catch (error) {
      console.error("Помилка завантаження рецептів:", error);
    }
  }
  
  // Функція для створення модального вікна (залишається без змін)
  function createRecipeModal(recipe) {
    const modalHTML = `
      <div class="modal fade" id="recipeModal${recipe.id}" tabindex="-1" aria-labelledby="recipeModalLabel${recipe.id}" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="recipeModalLabel${recipe.id}">${recipe.title}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img src="${recipe.image}" class="img-fluid mb-3" alt="${recipe.title}">
              <div class="row mb-3">
                <div class="col-md-6">
                  <h6>Інгредієнти:</h6>
                  <ul>
                    ${recipe.ingredients.map((ing) => `<li>${ing}</li>`).join("")}
                  </ul>
                </div>
                <div class="col-md-6">
                  <h6>Час приготування:</h6>
                  <p>${recipe.cookTime}</p>
                  <h6>Калорійність:</h6>
                  <p>${recipe.calories} ккал</p>
                </div>
              </div>
              <h6>Кроки приготування:</h6>
              <ol>
                ${recipe.steps.map((step) => `<li>${step}</li>`).join("")}
              </ol>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрити</button>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", modalHTML);
  }
  
  // Ініціалізація після завантаження DOM
  document.addEventListener("DOMContentLoaded", async () => {
    await loadRecipes();
  });
export async function getRecipes() {
    try {
      const response = await fetch('recipes.json');
      const recipes = await response.json();
      const topDiv = document.getElementById("top-cards");
      
      // Створюємо масив з 4 унікальних випадкових індексів
      const randomIndices = [];
      while (randomIndices.length < 4) {
        const randNum = Math.floor(Math.random() * 20);
        if (!randomIndices.includes(randNum)) {
          randomIndices.push(randNum);
        }
      }
      
      // Формуємо HTML для карток
      const cardsHTML = randomIndices.map(index => {
        const recipe = recipes[index];
        return `
          <div class="col-12 col-sm-12 col-md-6 col-lg-3 card-container">
            <div class="card">
              <img src="${recipe.image}" class="card-img-top" alt="Зображення рецепту" />
              <div class="card-body">
                <h5 class="card-title">${recipe.title}</h5>
                <p class="card-text">${recipe.description}</p>
                <a href="#" class="btn btn-primary mt-auto">Детальніше</a>
              </div>
            </div>
          </div>
        `;
      }).join('');
      
      // Вставляємо результат в DOM
      topDiv.innerHTML = `
        <div class="container mt-4">
          <div class="row">
            ${cardsHTML}
          </div>
        </div>`;
        
    } catch (error) {
      console.error('Помилка завантаження даних:', error);
    }
  }
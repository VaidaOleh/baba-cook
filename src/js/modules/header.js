
// Створення та вставка навігації
function createHeader() {
  const navigation = document.getElementById("header");
  if (!navigation) return;

  navigation.innerHTML = `
  <header id="header">
        <div class="header">
          <div class="logo">Баба знає!</div>
          <div>
            <button class="btn-1"><a href="pages/ВсіРецепти/")}">Всі рецепти</a></button>
          </div>
        </div>
        <div class="categories">
          <button><a href="/index.html">Головна</a></button>
          <button><a href="pages/Святкові/index.html">Святкові</a></button>
          <button><a href="pages/Сніданок/index.html">Сніданок</a></button>
          <button><a href="pages/Обідні/index.html">Обідні</a></button>
          <button><a href="pages/Вечірні/index.html"">Вечірні</a></button>
          <button><a href="pages/Смаколики/index.html">Смаколики</a></button>
        </div>
      </header>`;
}

// Ініціалізація при завантаженні DOM
document.addEventListener("DOMContentLoaded", createHeader);

export { createHeader };

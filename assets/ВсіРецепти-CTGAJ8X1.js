import"./navigation-DLny_DlZ.js";async function m(){try{const l=await(await fetch("../../recipes.json")).json(),e=document.getElementById("recipes-container");l.forEach(a=>{const d=document.createElement("div");d.className="card mb-4",d.style.width="18rem";const n=document.createElement("img");n.src=a.image,n.className="card-img-top",n.alt=a.title;const o=document.createElement("div");o.className="card-body";const i=document.createElement("h5");i.className="card-title",i.textContent=a.title;const c=document.createElement("p");c.className="card-text",c.innerHTML=`<strong>Час:</strong> ${a.cookTime}<br><strong>Калорії:</strong> ${a.calories}`;const s=document.createElement("button");s.className="btn btn-primary",s.textContent="Деталі рецепту",s.setAttribute("data-bs-toggle","modal"),s.setAttribute("data-bs-target",`#recipeModal${a.id}`),o.appendChild(i),o.appendChild(c),o.appendChild(s),d.appendChild(n),d.appendChild(o),e.appendChild(d),r(a)})}catch(t){console.error("Помилка завантаження рецептів:",t)}}function r(t){const l=`
      <div class="modal fade" id="recipeModal${t.id}" tabindex="-1" aria-labelledby="recipeModalLabel${t.id}" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="recipeModalLabel${t.id}">${t.title}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img src="${t.image}" class="img-fluid mb-3" alt="${t.title}">
              <div class="row mb-3">
                <div class="col-md-6">
                  <h6>Інгредієнти:</h6>
                  <ul>
                    ${t.ingredients.map(e=>`<li>${e}</li>`).join("")}
                  </ul>
                </div>
                <div class="col-md-6">
                  <h6>Час приготування:</h6>
                  <p>${t.cookTime}</p>
                  <h6>Калорійність:</h6>
                  <p>${t.calories} ккал</p>
                </div>
              </div>
              <h6>Кроки приготування:</h6>
              <ol>
                ${t.steps.map(e=>`<li>${e}</li>`).join("")}
              </ol>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрити</button>
            </div>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",l)}document.addEventListener("DOMContentLoaded",async function(){await m()});

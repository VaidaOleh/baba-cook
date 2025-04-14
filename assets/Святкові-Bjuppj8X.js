import"./navigation-DLny_DlZ.js";async function r(){try{const a=(await(await fetch("../../recipes.json")).json()).filter(e=>e.category==="Святкові"),m=document.getElementById("recipes-container");m.innerHTML="",a.forEach(e=>{const d=document.createElement("div");d.className="card mb-4",d.style.width="18rem";const n=document.createElement("img");n.src=e.image,n.className="card-img-top",n.alt=e.title;const o=document.createElement("div");o.className="card-body";const l=document.createElement("h5");l.className="card-title",l.textContent=e.title;const i=document.createElement("p");i.className="card-text",i.innerHTML=`<strong>Час:</strong> ${e.cookTime}<br><strong>Калорії:</strong> ${e.calories}`;const s=document.createElement("button");s.className="btn btn-primary",s.textContent="Деталі рецепту",s.setAttribute("data-bs-toggle","modal"),s.setAttribute("data-bs-target",`#recipeModal${e.id}`),o.appendChild(l),o.appendChild(i),o.appendChild(s),d.appendChild(n),d.appendChild(o),m.appendChild(d),b(e)})}catch(t){console.error("Помилка завантаження рецептів:",t)}}function b(t){const c=`
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
                    ${t.ingredients.map(a=>`<li>${a}</li>`).join("")}
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
                ${t.steps.map(a=>`<li>${a}</li>`).join("")}
              </ol>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрити</button>
            </div>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",c)}document.addEventListener("DOMContentLoaded",async()=>{await r()});

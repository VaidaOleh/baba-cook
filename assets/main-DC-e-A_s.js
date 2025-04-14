import"./navigation-DLny_DlZ.js";async function i(){try{const e=await(await fetch("recipes.json")).json(),n=document.getElementById("top-cards"),c=[];for(;c.length<4;){const s=Math.floor(Math.random()*20);c.includes(s)||c.push(s)}const o=c.map(s=>{const t=e[s];return`
          <div class="col-12 col-sm-12 col-md-6 col-lg-3 card-container">
            <div class="card">
              <img src="${t.image}" class="card-img-top" alt="Зображення рецепту" />
              <div class="card-body">
                <h5 class="card-title">${t.title}</h5>
                <p class="card-text">${t.description}</p>
                <a href="pages/ВсіРецепти/" class="btn btn-primary mt-auto">Детальніше</a>
              </div>
            </div>
          </div>
        `}).join("");n.innerHTML=`
        <div class="container mt-4">
          <div class="row">
            ${o}
          </div>
        </div>`}catch(a){console.error("Помилка завантаження даних:",a)}}document.addEventListener("DOMContentLoaded",async function(){await i()});

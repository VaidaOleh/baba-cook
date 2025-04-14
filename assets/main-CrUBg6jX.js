import"./modulepreload-polyfill-B5Qt9EMX.js";async function i(){try{const n=await(await fetch("recipes.json")).json(),e=document.getElementById("top-cards"),c=[];for(;c.length<4;){const t=Math.floor(Math.random()*20);c.includes(t)||c.push(t)}const o=c.map(t=>{const s=n[t];return`
          <div class="col-12 col-sm-12 col-md-6 col-lg-3 card-container">
            <div class="card">
              <img src="${s.image}" class="card-img-top" alt="Зображення рецепту" />
              <div class="card-body">
                <h5 class="card-title">${s.title}</h5>
                <p class="card-text">${s.description}</p>
                <a href="#" class="btn btn-primary mt-auto">Детальніше</a>
              </div>
            </div>
          </div>
        `}).join("");e.innerHTML=`
        <div class="container mt-4">
          <div class="row">
            ${o}
          </div>
        </div>`}catch(a){console.error("Помилка завантаження даних:",a)}}document.addEventListener("DOMContentLoaded",async function(){await i()});

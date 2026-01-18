document.addEventListener("DOMContentLoaded",()=>{
  const grid=document.querySelector("#productGrid");
  const detail=document.querySelector("#productDetail");


  if(grid){
    grid.innerHTML="";
    HAYSTRACK_PRODUCTS.forEach(p=>{
      const div=document.createElement("div");
      div.className="card";
      div.innerHTML=`
        <img src="${p.image}" alt="${p.model}" onerror="this.src='images/placeholder.png'">
        <h4>${p.model}</h4>
        <p>${p.desc}</p>
        <a class="btn" href="product.html?model=${p.model}">View</a>
      `;
      grid.appendChild(div);
    });
  }

  // Detail page
  if(detail){
    const params=new URLSearchParams(location.search);
    const model=params.get("model")||"FH-101";
    const p=HAYSTRACK_PRODUCTS.find(x=>x.model===model)||HAYSTRACK_PRODUCTS[0];
    detail.innerHTML=`
      <div><img src="${p.image}" alt="${p.model}" style="width:100%;border-radius:8px"
        onerror="this.src='images/placeholder.png'"></div>
      <div>
        <h2>${p.name}</h2>
        <p>${p.desc}</p>
        <p><strong>Material:</strong> ${p.material}</p>
        <p><strong>Sizes:</strong> ${p.sizes.join(', ')} inch</p>
        <p><strong>Finishes:</strong> ${p.finishes.join(', ')}</p>
        <p><strong>Contact:</strong> +91 99136 02860 | +91 97262 06214</p>
        <a class="btn" href="mailto:info@example.com?subject=Enquiry ${p.model}">Enquire</a>
      </div>`;
  }
});


const params = new URLSearchParams(window.location.search);

const paramId = params.get('id');


console.log(paramId);

//listen loading
document.addEventListener('DOMContentLoaded', async ()=> {
//get elements from api
   const res =  await fetch('./db.json');
   const data = await res.json();

   console.log(paramId, data.menu);
//to find matching id's
  const product = data.menu.find((item)=> item.id == paramId);

  renderPage(product);
});

const outlet = document.getElementById('outlet')

function renderPage(product) {
console.log(product)
 outlet.innerHTML = `
 <div class="d-flex justify-content-between fs-5">
 <a href="/">
     <img width="40px" src="images/home.png" alt="">
 </a>
 <p>home/${product.category}/${product.title.toLowerCase()}</p>
</div>


<h1 class="text-center my-3 ">
${product.title} 
</h1>

<img class="rounded object-fit-cover shadow" src="${product.img}" alt="oreo">

<h3>
 <span>Product Category :</span>
 <span class="text-success"> ${product.category}</span>
</h3>

<h3>
 <span>Product Price :</span>
 <span class="text-success"> ${product.price}</span>
</h3>

<p class="lead"> ${product.desc}
</p>

 
 `

}
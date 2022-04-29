let filteredProduct = [...products];

const productContainer  = document.querySelector('.products-container');

function displayProducts(){

if(filteredProduct.length < 1){
  productContainer.innerHTML = `<h5 class="product-name">Sorry, no products matched your search</h5>`
  return;
}

productContainer.innerHTML = filteredProduct.map(({id,title,image,price}) =>{
    return `<article class="product" data-id='${id}'>
          <img src="${image}" alt="" class="product-img img">
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">${price}</span>
          </footer>
        </article>`;
})
.join('');
};

displayProducts();

//

const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

form.addEventListener('keyup',function(){

 const inputValue = searchInput.value;

 filteredProduct = products.filter(product =>{
   return product.title.toLowerCase().includes(inputValue)
 })
 displayProducts();
});

// filter buttons

const companies = document.querySelector('.companies');

function displayButtons() {
  const buttons = ['all',...new Set(products.map(product => product.company))];
 companies.innerHTML =  buttons.map((company)=>{
   return `<button class="company-btn" data-id='${company}'>${company}</button>`
 }).join('')
}
displayButtons()
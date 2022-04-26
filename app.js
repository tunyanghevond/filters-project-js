let filteredProduct = [...products];

const productContainer  = document.querySelector('.products-container');

function displayProducts(){

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

// text filter

const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

form.addEventListener('keyup',function(){

 const inputValue = searchInput.value;

 filteredProduct = products.filter(product =>{
   return product.title.toLowerCase().includes(inputValue)
 })
 displayProducts();
});

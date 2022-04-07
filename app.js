let filteredProduct = [...products];
const productContainer  = document.querySelector('.products-container');

function displayProducts(){
productContainer.innerHTML = filteredProduct.map(product =>{
    const {id,title,company,image,price} = product
    return ` <img src="${image}" class="product-img img">
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">${price}</span>
          </footer>`
})
}
displayProducts();

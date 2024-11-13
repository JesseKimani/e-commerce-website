import { cart, addToCart } from '../scripts/data/cart.js';
// import { products, loadProductsFetch } from "../data/products.js";
import { products } from './data/products.js';


/*
// Use async await for asynchronous functions. eg. where you require products to load from an API
async function loadShop() {
  try {
    await loadProductsFetch();

  } catch (error) {
    console.log('Unexpected error');
  }

  renderProductsGrid();
}

loadShop();
*/


function renderProductsGrid() {
  updateCartQuantity(); // Ensure the quantity is always updated whenever the page is loaded

  //Loop through the products array and generate html code
  let productsHTML = '';

  products.forEach((product) => {
    productsHTML += `
      <div class="product-container">
            <div class="product-image-container">
              <img class="product-image"
                src="${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
              ${product.name}
            </div>

            <div class="product-rating-container">
              <img class="product-rating-stars"
                src=${product.getStarsUrl()}>
              <div class="product-rating-count link-primary">
                ${product.rating.count}
              </div>
            </div>

            <div class="product-price">KSh 
              ${product.getPrice()}
            </div>

            <div class="product-quantity-container">
              <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            ${product.extraInfoHTML()}

            <div class="product-spacer"></div>

            <div class="added-to-cart">
              <img src="images/icons/checkmark.png">
              Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart"
              data-product-id = "${product.id}"
            >
              Add to Cart
            </button>
          </div>
    `;
  });

  //Use DOM to put the products grid to the webpage
  document.querySelector('.js-products-grid').innerHTML = productsHTML;

  // Update cart quantity
  function updateCartQuantity() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });
    
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
  };

  //Use event listener to enable 'Add to Cart' button functionality
  document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
      button.addEventListener(('click'), () => {
        const productId = button.dataset.productId;

        addToCart(productId);
        updateCartQuantity();
      });
    });
}

renderProductsGrid();
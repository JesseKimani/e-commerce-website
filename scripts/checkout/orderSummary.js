import { cart, removeFromCart, updateDeliveryOption, calculateCartQuantity } from "../data/cart.js";
import {  getProduct } from "../data/products.js";
import { formatCurrency } from "../utils/money.js";
import { deliveryOptions, getDeliveryOption } from "../data/deliveryOptions.js";
import { renderPaymentSummary } from "./paymentSummary.js";

import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

/*
// dayjs library
const today = dayjs();
console.log(today);
const deliveryDate = today.add(7, 'days');
console.log(deliveryDate);

console.log(deliveryDate.format('dddd, MMMM, D'));
*/

export function renderOrderSummary() {
  // Generate the HTML for the checkout items quantity at the top of the page
  const checkoutItemsHTML = `
  Checkout (${calculateCartQuantity()}) items
  `;
  document.querySelector('.js-checkout-items').innerHTML = checkoutItemsHTML;

  let cartSummaryHTML = '';

  // Loop through the cart to get each product id
  cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    const matchingProduct = getProduct(productId);

    const deliveryOptionId = cartItem.deliveryOptionId;

    const deliveryOption = getDeliveryOption(deliveryOptionId);

    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
    const dateString = deliveryDate.format('dddd, MMMM D');

    // Generate the html for each item
    cartSummaryHTML += `
    <div class="cart-item-container 
      js-cart-item-container
      js-cart-item-container-${matchingProduct.id}">
      <div class="delivery-date">
        Delivery date: ${dateString}
      </div>

      <div class="cart-item-details-grid">
        <img class="product-image"
          src="${matchingProduct.image}">

        <div class="cart-item-details">
          <div class="product-name">
          ${matchingProduct.name}
          </div>
          <div class="product-price">
          KES ${matchingProduct.getPrice()}
          </div>
          <div class="product-quantity
            js-product-quantity-${cartItem.productId}">
            <span>
              Quantity: <span class="quantity-label">${cartItem.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary">
              Update
            </span>
            <span class="delete-quantity-link link-primary 
              js-delete-link-${matchingProduct.id}
              js-delete-quantity-link" 
              data-product-id=${matchingProduct.id}>
              Delete
            </span>
          </div>
        </div>

        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
          ${deliveryOptionsHTML(matchingProduct, cartItem)}
        </div>
      </div>
    </div>
    `
  });

  // Generate HTML for the delivery options.
  function deliveryOptionsHTML(matchingProduct, cartItem) {
    let html = '';

    deliveryOptions.forEach((deliveryOption) => {
      const today = dayjs();
      const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
      const dateString = deliveryDate.format('dddd, MMMM D');

      // Same as 'if' statement but stores the result in a variable
      const priceString = deliveryOption.deliveryDays === 7
        ? 'FREE'
        : `KES ${deliveryOption.priceCents} -`;

      const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

      html += 
      ` 
        <div class="delivery-option js-delivery-option"
          data-product-id=${matchingProduct.id}
          data-delivery-option-id=${deliveryOption.id}>
          <input type="radio"
            ${isChecked ? 'checked' : ''}
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}">
          <div>
            <div class="delivery-option-date">
              ${dateString}
            </div>
            <div class="delivery-option-price">
              ${priceString} Delivery
            </div>
          </div>
        </div>
      `
    });

    return html;
  }

  // Post the generated html to the web page
  document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;

  // Delete functionality
  document.querySelectorAll('.js-delete-quantity-link')
    .forEach((link) => {
      link.addEventListener('click', () => {
        const productId =  link.dataset.productId; // Use data attribute to access the button
        removeFromCart(productId);
        renderPaymentSummary();

        // Use DOM to remove an item from the page
        const container = document.querySelector(`.js-cart-item-container-${productId}`);
        container.remove();
      });
    });

  // Add event listeners to delivery options
  document.querySelectorAll('.js-delivery-option')
    .forEach((element) => {
      /*
      const productId = button.dataset.productId;
      const deliveryOptionId = button.dataset.deliveryOptionId;
      */
    const { productId, deliveryOptionId } = element.dataset; // Shorthand property does the same as the above 2 lines
      element.addEventListener('click', () => {
        updateDeliveryOption(productId, deliveryOptionId);
        renderOrderSummary();
        renderPaymentSummary();
      })
    });
}

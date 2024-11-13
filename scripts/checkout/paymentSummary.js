import { cart, calculateCartQuantity } from "../data/cart.js";
import { formatCurrency } from "../utils/money.js";
import {  getDeliveryOption } from "../data/deliveryOptions.js";
import {  getProduct } from "../data/products.js";
import { addOrder } from "../data/orders.js";

export function renderPaymentSummary() {
  // Calculate the cost of all products in the cart
  let productPriceCents = 0;
  let shippingPriceCents = 0;

  cart.forEach(cartItem => {
    const product = getProduct(cartItem.productId);
    productPriceCents += product.priceCents * cartItem.quantity;

    let deliveryOptionId = cartItem.deliveryOptionId;
    const deliveryOption = getDeliveryOption(deliveryOptionId);
    shippingPriceCents += deliveryOption.priceCents;
    
  });

  const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
  const taxCents = totalBeforeTaxCents * 0.16;
  const totalCents = totalBeforeTaxCents + taxCents;

  
  // Generate HTML for the payment summary
  const paymentSummaryHTML = `
    <div class="payment-summary-title">
      Order Summary
    </div>

    <div class="payment-summary-row">
      <div>Items (${calculateCartQuantity()}):</div>
      <div class="payment-summary-money">KES ${productPriceCents}</div>
    </div>

    <div class="payment-summary-row">
      <div>Delivery &amp; handling:</div>
      <div class="payment-summary-money js-shipping-price">KES ${shippingPriceCents}</div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">KES ${totalBeforeTaxCents}</div>
    </div>

    <div class="payment-summary-row">
      <div>Estimated tax (16% VAT):</div>
      <div class="payment-summary-money">KES ${taxCents}</div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">KES ${totalCents}</div>
    </div>

    <button class="place-order-button button-primary js-place-order">
      Place your order
    </button>
  `;

  document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;

  
  // Using a backend API
  document.querySelector('.js-place-order')
    .addEventListener('click', async () => {
      /*
      try {
        const response = await fetch('https://jessebackend/orders', {
          method: 'POST',
          headers: {
            'Content-Type':  'application/json'
          },
          body: JSON.stringify({
            cart: cart
          })
        });
        console.log(response);
  
        const order = await response.json();
        addOrder(order);
        console.log(order);

      } catch (error) {
        console.log('Unexpected error')
      }
      */

      window.alert('Hi, your order has been placed and a confirmation email sent to you.\nPlease track your package using the link in your email.\nThank you for shopping with us');
      localStorage.removeItem('cart');
      window.location.href = "shop.html";

      // window.location.href = 'orders.html';
    });
}

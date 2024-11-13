import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js";
import { loadFromStorage } from "../../data/cart.js";
import { loadProducts, loadProductsFetch } from "../../data/products.js";


describe('test suite: renderOrderSummary', () => {
  const productId1 = "e43638ce-6aa0-4b85-b27f-e1d07eb678c6";
  const productId2 = "15b6fc6f-327a-4ec4-896f-486349e85a3d";

  // 'beforeAll' is a hook that runs the function before the tests begin
  beforeAll((done) => {
    loadProductsFetch().then(() => {
      done();
    });
  });

  // 'beforeEach' is a hook that runs the function before each test
  beforeEach(() => {
    document.querySelector('.js-test-container').innerHTML = `
      <div class="js-order-summary"></div>
      <div class="js-payment-summary"></div>
    `;

    spyOn(localStorage, 'setItem');

    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([
        {
          productId: productId1,
          quantity: 2,
          deliveryOptionId: '1'
        },
      
        {
          productId: productId2,
          quantity: 1,
          deliveryOptionId: '2'
        }
      ]);
    });
    loadFromStorage();
    renderOrderSummary();
  });

  // 'afterEach' is a hook that runs the function after each test
  afterEach(() => {
    document.querySelector('.js-test-container').innerHTML = '';
  });

  
  // Tests start
  // Displaying the cart items in the page
  it('displays the cart', () => {
    expect(
      document.querySelectorAll('.js-cart-item-container').length
    ).toEqual(2);

    expect(
      document.querySelector(`.js-product-quantity-${productId1}`).innerText
    ).toContain("Quantity: 2");

    expect(
      document.querySelector(`.js-product-quantity-${productId2}`).innerText
    ).toContain("Quantity: 1");

  });

  // Delete an item from the cart
  it("removes a product from the cart", () => {
    /*
    removeFromCart(productId2);
    expect(cart.length).toEqual(1);
    */

    document.querySelector(`.js-delete-link-${productId1}`).click();
    expect(
      document.querySelectorAll('.js-cart-item-container').length
    ).toEqual(1);

    expect(
      document.querySelector(`.js-cart-item-container-${productId1}`)
    ).toEqual(null);

    expect(
      document.querySelector(`.js-cart-item-container-${productId2}`)
    ).not.toEqual(null);
  });
});

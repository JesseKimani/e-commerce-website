import { renderOrderSummary } from "./orderSummary.js";
import { renderPaymentSummary } from "./paymentSummary.js";
// import { loadProductsFetch } from "../data/products.js";
//import '../data/backend-practice.js';
// import "../data/cart-class.js";

renderOrderSummary();
renderPaymentSummary();

/*
// Promise runs the inner funcion immediately. It waits for asynchronous code to finish.
// If there are multiple promises, use Promise.all()
new Promise((resolve) => {
  loadProducts(() => {
    resolve();
  });
}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/


/*
// A callback - Does the same as the above 'Promise' code
loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
// async makes a function return a promise
async function loadPage() {
  console.log('load page');

  await loadProductsFetch(); // waits for this line of code to finish before proceeding

  return 'value2'
};
loadPage().then((value) => {
  console.log('next step');
  console.log(value);
});
*/

/*
async function loadPage() {
  // Use try catch for error handling
  try {
    // Use throw to create an error manually
    // throw 'error1';

    await loadProductsFetch();

  } catch (error) {
    console.log('Unexpected error. Please try again');
  }

  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();
*/
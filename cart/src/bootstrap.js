import faker from "faker";

const mount = (element) => {
  let cart = "";

  cart += `<div>You have ${faker.random.number()} items in your cart.</div>`;

  element.innerHTML = cart;
};

// Situation #1: dev + isolation
if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#dev-cart");

  // If were in dev mode and element exists in cart index.html,
  // run mount function with that element to send it to the web page now
  element && mount(element);
}

// Situation #2: dev or prod in container app
// If not situation 1, we want to just send mount,
// so that the container has control as to when it shows the element
export { mount };

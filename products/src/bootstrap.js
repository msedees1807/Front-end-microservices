import faker from "faker";

const mount = (element) => {
  let products = "";

  for (let i = 0; i < 10; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  element.innerHTML = products;
};

// Situation #1: Dev + isolation
// We are running the file in dev, in isolation
// "development" is set in webpack's mode value
if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#dev-products");
  // Assuming our container doesn't have an element named "dev-products",
  // we are probably running in isolation
  element && mount(element);
}

// Situation #2: Dev or prod via Container app
export { mount };

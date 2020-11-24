import { mount as productsMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartShow";

console.log("Container! This is in the bootstrapjs file.");

productsMount(document.querySelector("#my-products"));
cartMount(document.querySelector("#dev-cart"));

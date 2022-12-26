import { fetchJson } from "./api";

// const { CMS_URL } = process.env;
const URL = "https://jsonplaceholder.typicode.com/posts";

export async function getProduct(id) {
  const product = await fetchJson(`${URL}/${id}`);
    // return stripProduct(product);
  return product;
}

export async function getProducts() {
  const products = await fetchJson(URL);
  //   return products.map(stripProduct);
  return products;
}

// function stripProduct(product) {
//   return {
//     id: product.id,
//     title: product.title,
//     description: product.description,
//     price: '$' + product.price.toFixed(2),
//     pictureUrl: CMS_URL + product.picture.url,
//   };
// }

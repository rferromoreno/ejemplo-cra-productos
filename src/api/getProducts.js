const BASE_URL = 'https://my-json-server.typicode.com/rferromoreno/ejemplo-cra-productos';

const getProducts = () => fetch(`${BASE_URL}/products`).then(res => res.json());

export default getProducts;


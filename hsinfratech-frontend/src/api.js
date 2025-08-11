import axios from "axios";

const BASE_URL = "http://localhost:8181/api/products";

export const getProducts = () => axios.get(BASE_URL);
export const addProduct = (product) => axios.post(BASE_URL, product);
export const deleteProduct = (id) => axios.delete(`${BASE_URL}/${id}`);

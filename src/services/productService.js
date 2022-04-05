import http from "./http";

export const getProducts = async() => {
    return await http.get("https://fakestoreapi.com/products")
        .then(res => res.data)
        .catch(err => console.log(err));
}
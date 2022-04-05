import axios from 'axios';

// axios.defaults.baseURL = "https://fakestoreapi.com/";

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete
}
import axios from 'axios';

// TODO
// https://www.npmjs.com/package/axios
const api = axios.create({
    baseURL: 'http://localhost:6080/_api/'
});

export { api };
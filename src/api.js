import axios from 'axios';

const BASE_URL = 'https://oubi-tech-back.vercel.app';


export default async function api(endpoint, requestBody) {
    axios.post(`${BASE_URL}${endpoint}`, requestBody)
    .then((data) => {
        return data;
    })
    .catch((error) => {
        console.log(error.message);
        return "Something went wrong, try again"
    });
}
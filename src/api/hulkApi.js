

import axios from "axios";




const hulkApi = axios.create({
    baseURL: 'http://localhost:4000/api'
});


export default hulkApi;
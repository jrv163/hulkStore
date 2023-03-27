

import axios from "axios";




const hulkApi = axios.create({
    baseURL: 'http://localhost:4000/api'
});

// interceptores

hulkApi.interceptors.request.use( config => {
  
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config;
})


export default hulkApi;
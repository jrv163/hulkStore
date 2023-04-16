// import axios from "axios";

import { useEffect, useState } from "react"

// const DataApi = axios.create({
//     baseURL: ' http://localhost:4000/api/list'
// });
// export default DataApi;

export const DataApi = () => {

const [datos, setDatos] = useState([]);


    useEffect(() => {
         fetch( 'http://localhost:4000/api/list' )
        .then( resp => resp.json())
        .then( data => setDatos(data.items)) 
    }, [])
    
    return {
            datos
    }
}


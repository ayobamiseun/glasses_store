import axios from "axios";
import React, {useState, useEffect} from 'react'
const options = {
    method: 'GET',
    url: 'https://fakestoreapi.com/products/',
    
  };
 function Api() {
    const [items, setItems] = useState([]);
    useEffect(() => {
    
        axios.request(options).then(function (response) {
             console.log(response.data);
            setItems(response.data);
        }).catch(function (error) {
            console.error(error);
        });
     
    },[])
    
}
export default Api()

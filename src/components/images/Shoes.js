import axios from "axios";
import React, {useState, useEffect} from "react";

const options = {
  method: 'GET',
  url: 'https://fakestoreapi.com/products/',
  
};





export default function Shoes() {
  
    const [items, setItems] = useState([]);
    useEffect(() => {
      
        axios.request(options).then(function (response) {
             console.log(response.data);
            setItems(response.data);
        }).catch(function (error) {
            console.error(error);
        });
     
    },[])
    // if (!items) return null;
    return (
<div>
      {items.map((item, id) => { return (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <img src={item.image}></img>
      </div>
      );
      })}
      </div>
    );
}

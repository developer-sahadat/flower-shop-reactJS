import { useState,  useEffect } from "react";

const useProducts = () => {
    const [products, setProducts]=useState([])

    useEffect(()=>{
        fetch('FakeData.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return [products, setProducts];

};

export default useProducts;
import { useState,useEffect  } from "react";
import { Link } from "react-router-dom";
const Products = ()=>{

    const[products,setProducts]=useState([])

    const fetchData=async()=>{

        try {
            const res=await fetch("https://dummyjson.com/products");
    
            let Data= await res.json()
    
            setProducts(Data.products)
            console.log(Data.products);
            
            
        } catch (error) {
            console.log(error);
            
        }

    }

    useEffect(()=>{
fetchData()
    },[])

    return(
        <>
       
       {products.map((item,i)=>(
<div key={i}>
    <Link to={`/product/${item.id}`}>
    <p>{item.title}</p></Link>

</div>

       ))}

        </>
    )

}

export default Products
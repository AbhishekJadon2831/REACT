import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function ProductDetails() {
    const { id } = useParams();
    console.log(id);

    const [data, setData] = useState({});
    const apifetch = async () => {
        try {
            const res = await fetch(`https://dummyjson.com/products/${id}`);
            const result = await res.json();
            setData(result)
            console.log(data);

        } catch (error) {
            console.log(error);

        }


    }

    useEffect(() => {
        apifetch();
    }, [id])

    return (
        <>
            <h1>ProductDetails</h1>
            {<div>
                <img src={data.thumbnail} alt="" />
                <h1>{data.title}</h1>
                <h1>{data.description}</h1>
            </div>}
        </>
    )
}

export default ProductDetails;
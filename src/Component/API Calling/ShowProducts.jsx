import { useEffect, useState } from "react";

const ShowProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products").then((data) => data.json()).then((data) => {
            console.log("Response", data)
            setProducts(products);
            console.log("products data", data)
        }).catch((error) => {
            console.log("error", error);
            setProducts([]);
            console.log("products data", products)
        })
    }, [])

    return (
        <p>ShowProducts</p>
    )
}

export default ShowProducts;

import axios from "axios";
import { useState, useEffect } from "react";
function Products({ addToCart }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <h1>Products</h1>
            <div>

                {loading ? (
                    <p>Loading products...</p>
                ) : (
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {products.map(product => (
                            <div key={`${product.id}-${Math.random()}`} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px", width: "200px" }}>
                                <img src={product.image} alt={product.title} style={{ width: "100px", height: "100px" }} />
                                <h3>{product.title}</h3>
                                <p>${product.price}</p>
                                <button onClick={() => addToCart({ ...product, uniqueId: Date.now() })}>Add to Cart</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>

    );
}


export default Products;
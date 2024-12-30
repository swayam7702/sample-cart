


function Cart({ cartItems, removeFromCart }) {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    return (
        <div className="cart-parent">
           <div className="cart-title">
            <h1>Your  Cart</h1>
                <div style={{ marginBottom: "20px", fontWeight: "bold" }}>
                            Total Price: ${totalPrice.toFixed(2)}
                </div>
           </div>
            {
            (cartItems.length === 0) ? (
                <div className="cart-empty">
                    <p>Your cart is empty.</p>
                </div>
            ) : (
                <div className="cart-items">
                    
                    {cartItems.map((item) => (
                        <div key={item.uniqueId} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px", width: "300px" }}>
                            <img src={item.image} alt={item.title} style={{ width: "100px", height: "100px" }} />
                            <h3>{item.title}</h3>
                            <p>${item.price}</p>
                            <button onClick={() => removeFromCart(item.uniqueId)}>Remove</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
export default Cart;
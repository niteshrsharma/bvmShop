import styles from './Cart.module.css';

export default function Cart
({itemsInCart, setItemsInCart}){
    const removeFromCart=(product)=>{
        let newItems=itemsInCart.filter((prevItems)=>prevItems.key!=product.key);

        setItemsInCart(newItems);
    }
    return (
        <>
            <div className={styles.cont}>
                {
                    itemsInCart.map((product)=>(
                        <div key={product.key} className={styles.product}>
                            <img src={product.image} alt="" />
                            <div>
                                <h2>{product.title}</h2>
                                <p>{product.details}</p>
                                <p>{product.price}</p>
                            </div>
                            <button onClick={()=>removeFromCart(product)}>Remove from cart</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
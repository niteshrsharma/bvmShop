import styles from './Card.module.css';

export default function Card({ data ,setItemsInCart}) {

    const addItemToCart=()=>{
        let newData={
            key: Math.random(),
            ...data
        }
        setItemsInCart((prevItems)=>[...prevItems, newData]);
    }
    
    return (
        <>
            <div className={styles.card}>
                <img src={data.image} alt="Denim Jeans" style={{width:"100%"}}/>
                    <h1>{data.title}</h1>
                    <p className={styles.price}>Rs. {data.price}</p>
                    <p>{data.details}</p>
                    <p><button onClick={addItemToCart}>Add to Cart</button></p>
            </div>
        </>
    )
}

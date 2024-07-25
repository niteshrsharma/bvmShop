import Card from "../../common/card/Card";
import styles from './Store.module.css';


export default function Store({itemsInCart, setItemsInCart}){
    const items=[
        {
            image: "https://st4.depositphotos.com/14431644/22076/i/450/depositphotos_220767694-stock-photo-handwriting-text-writing-example-concept.jpg",
            title: "Hello this is title",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aut soluta iste omnis voluptates placeat dicta nisi aperiam, doloremque ad asperiores, quod enim molestiae earum in impedit corporis iusto dignissimos.",
            price: 3000
        },
        {
            image: "https://st4.depositphotos.com/14431644/22076/i/450/depositphotos_220767694-stock-photo-handwriting-text-writing-example-concept.jpg",
            title: "Hello this is title",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aut soluta iste omnis voluptates placeat dicta nisi aperiam, doloremque ad asperiores, quod enim molestiae earum in impedit corporis iusto dignissimos.",
            price: 3000
        },
        {
            image: "https://st4.depositphotos.com/14431644/22076/i/450/depositphotos_220767694-stock-photo-handwriting-text-writing-example-concept.jpg",
            title: "Hello this is title",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aut soluta iste omnis voluptates placeat dicta nisi aperiam, doloremque ad asperiores, quod enim molestiae earum in impedit corporis iusto dignissimos.",
            price: 3000
        }
    ]
    return (
        <>
            <div className={styles.products}>
                {
                    items.map((product)=>(
                        <Card data={product} key={Math.random()} setItemsInCart={setItemsInCart}/>
                    ))
                }
            </div>
        </>
    )
}
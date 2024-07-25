import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/nav/Navbar'
import Home from './components/home/Home';
import Store from './components/store/Store';
import Cart from './components/cart/Cart';
let login=false;
export default function App() {
  const [tab, setTab] = useState('home');
  const [itemsInCart, setItemsInCart]=useState(()=>{
    const savedItems=localStorage.getItem('itemsInCart');
    return savedItems ? JSON.parse(savedItems) : []
  });

  useEffect(()=>{
    localStorage.setItem('itemsInCart', JSON.stringify(itemsInCart));
  }, [itemsInCart]);

  
  return (
    <>
      <Navbar tab={tab} setTab={setTab} login={login} itemsInCart={itemsInCart}/>

      <div className='main-cont'>
        {
          tab == 'home' && <Home />
        }
        {
          tab=='store' && <Store itemsInCart={itemsInCart} setItemsInCart={setItemsInCart}/>
        }
        {
          tab=='cart' && <Cart itemsInCart={itemsInCart} setItemsInCart={setItemsInCart}/>
        }
      </div>
    </>
  )
}
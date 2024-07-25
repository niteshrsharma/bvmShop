import styles from './Navbar.module.css';
import logo from '../../assets/react.svg'
import { FaSearch, FaUserCircle, FaShoppingBasket } from "react-icons/fa";
import { useState } from 'react';
import { RiProfileFill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";

export default function Navbar({ tab, setTab, login, itemsInCart }) {
  const [popup, setPopup] = useState(false);
  return (
    <>
      {
        popup && <div className={styles.popupCont}>
          <div><RiProfileFill />Profile</div>
          <div><FaShoppingBasket />Orders</div>
          <div><IoLogOut />Logout</div>
        </div>
      }
      <nav className={styles.cont}>
        <div className={styles.options}>
          <img src={logo} alt="logo" className={styles.logo} />
          <div onClick={() => setTab('home')}>Home</div>
          <div onClick={() => setTab('store')}>Store</div>
        </div>
        {
          tab == 'store' && <div className={styles.searchCont}>
            <input type="text" />
            <FaSearch />
          </div>
        }
        {
          !login ? <div className={styles.auth}>
            <button>Sign In</button>
            <button>Sign Up</button>
          </div> : <div style={{ marginRight: "20px" , display: "flex", alignItems: 'center'}}>
            <div className={styles.shoppingCart}>
              <CiShoppingCart size={30} onClick={()=>setTab('cart')}/>
              <div>
                {
                  itemsInCart.length
                }
              </div>
            </div>
            <FaUserCircle size={30} onClick={() => setPopup(!popup)} />
          </div>
        }
      </nav>
    </>
  )
}
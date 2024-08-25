import product1 from "../assets/images/product-1.jpg";
import {FaShoppingCart,FaHeart,FaSearch } from "react-icons/fa";

const Cart = () => {
  return (
    <div className="bg-gray-400">
        <img src={product1} alt="" />
        <div className="flex justify-center p-5">
            <h1>Cart Title</h1>
        </div>
        <div className="flex justify-center gap-5 items-center border-2 border-black">
            <div className=" p-4 hover:bg-black hover:text-white">
                <FaShoppingCart/>
            </div>
            <div className="p-4 hover:bg-black hover:text-white">
                <FaHeart/>
            </div>
            <div className="p-4  hover:bg-black hover:text-white">
                <FaSearch/>
            </div>
        </div>
    </div>
  )
}

export default Cart
import product1 from "../assets/images/product-1.jpg";
import {FaShoppingCart,FaHeart,FaSearch } from "react-icons/fa";

const Cart = () => {
  return (
    <div className="bg-gray-200">
        <img className="transition-transform ease-in-out transform hover:scale-110" src={product1} alt="" />
        <div className="flex-row p-5">
            <div className="flex justify-center items-center font-bold">
                <h1>Cart Title</h1>
            </div>
            <div className="flex justify-center items-center mt-2">
                <h5>100$</h5>
            </div>
        </div>
        <div className="flex justify-center  items-center border border-black">
            <button>
                <div className=" p-4 hover:bg-black hover:text-white">
                    <FaShoppingCart/>
                </div>
            </button>
            <button>
                <div className="p-4 hover:bg-black hover:text-white">
                    <FaHeart/>
                </div>
            </button>
            <button>
                <div className="p-4  hover:bg-black hover:text-white">
                    <FaSearch/>
                </div>
            </button>
            
        </div>
    </div>
  )
}

export default Cart
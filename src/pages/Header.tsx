import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FaPhoneAlt,FaShoppingCart,FaHeart,FaSearch } from "react-icons/fa";

const Header = () => {

  return (
    <>
      <nav className="bg-slate-100 flex justify-center items-center">
        <div className="container px-3 py-3 ">
          <div className="flex flex-row  justify-between items-center p-3">
              <div className="flex justify-start items-center basis-1/4">
                <FaPhoneAlt />
                <p className="text-sm ml-2">+90 5555 555 5555</p>
              </div>
              <div className="flex justify-end items-center basis-1/4">
                <img src={logo} className="p-2" alt="" />
              </div>
              <div className="flex justify-end items-center basis-1/2">
                <ul className="flex gap-3">
                  <li>
                    <Link className="hover:bg-black flex items-center gap-1 hover:text-white p-2 rounded" to={"/shop"}><FaShoppingCart/> Shop</Link>
                  </li>
                  <li>
                    <Link className="hover:bg-black flex items-center gap-1 hover:text-white p-2 rounded" to={"/whisList"}> <FaHeart/>WhisList</Link></li>
                  <li className="flex">
                    
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaSearch className="text-black" />
                    </div>
                    <input
                      type="text"
                      className="border-2 border-black block w-full pl-10 pr-3 py-2 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Search..."
                    />
                  </div>
                  </li>
                </ul>
              </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header


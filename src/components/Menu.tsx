import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
        <div className="flex justify-center items-center p-5">
            <div className="container flex justify-center items-center p-5">
                <ul className="flex gap-10 mr-12">
                    <li>
                        <NavLink className="hover:outline-2 hover:text-cyan-600" to={"/"} >Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="hover:outline-2 hover:text-cyan-600" to={"/contact"} >Contack</NavLink>
                    </li>
                    <li>
                        <NavLink className="hover:outline-2 hover:text-cyan-600" to={"/about"} >About</NavLink>
                    </li>
                    <li>
                        <NavLink className="hover:outline-2 hover:text-cyan-600" to={"/product"} >Products</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Menu
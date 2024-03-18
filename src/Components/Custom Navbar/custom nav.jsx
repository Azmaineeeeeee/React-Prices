import { useState } from "react";
import Link from "./link/link";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoIosCloseCircleOutline } from "react-icons/io";
const Nav = () => {

    const [open,setOpen] = useState(false)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/dashboard", name: "Dashboard" }
      ];
      
      
      return (
        <nav className="bg-blue-500 p-6">
            <div className="md:hidden" onClick={() => {
                setOpen(!open)
            }}>
                {
                    ((open === true) ? <IoIosCloseCircleOutline className="text-2xl text-white" /> :<HiMenuAlt1 className="text-2xl text-white" />)
                }
            
            </div>
          <ul className = {`md:flex justify-between bg-blue-400 
          ${open ? 'top-14': '-top-80'} duration-1000
          absolute md:static p-4 text-white  rounded-md`}>
          {
            routes.map((route)=> 
                <Link key={route.id} route = {route}></Link>
              
            )
           }
          </ul>
        </nav>
    );
};

export default Nav;
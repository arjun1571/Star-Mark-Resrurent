import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../Hooks/useCart";

const NavBar = () => {
  const [cart] = useCart()
  const { user, logOut } = useContext(AuthContext);

  const [dmin,setAdmin]=useState()
  let isAdmin
  
  if(dmin?.admin){
     isAdmin = true;
  }
  else{
    isAdmin=false;
  }

  const token = localStorage.getItem('access-token')
  useEffect(()=>{
    fetch(`http://localhost:5000/users/admin/${user?.email}`,{
      headers:{
        authorization: `bearer ${token}`
      }
    })
    .then(res=>res.json())
    .then(data=>{
      setAdmin(data)
    })
  
    
  },[token, user?.email])

  const handleLogOut = () => {
    logOut();
  };
  const navItem = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/menu"}>Menu</Link>
      </li>
      <li>
        <Link to={"/order"}>Order Food</Link>
      </li>
      <li>
        <Link to={"/secret"}>secret</Link>
      </li>
      <li>
        <Link to={"/dashbord"}>
          <button className="flex items-center">
           <FaShoppingCart />
            <div className="badge badge-secondary mx-1">+{cart?.length || 0}</div>
          </button>
        </Link>
      </li>
      {
        isAdmin ? 
            <li>
              <Link to={"dashbord/admin-home"}>DashBoard</Link>
            </li> : 
            <li>
              <Link to={"dashbord/user-home"}>DasshBord</Link>
            </li>
      }

      {user ? (
        <>
          <li>
            <button className=" " onClick={handleLogOut}>
              log Out
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to={"/login"}>LogIn</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10  md:text-white max-w-screen-xl bg-black bg-opacity-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-2xl">STAR-MARK</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end">
          {user?.displayName && <h1>{user.displayName}</h1>}

          <a className="btn">LogOut</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;

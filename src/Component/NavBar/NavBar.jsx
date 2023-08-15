import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const NavBar = () => {
  const {user,logOut}=useContext(AuthContext)

  const handleLogOut =()=>{
    logOut()
  }
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

      {
        user ? <>
        <button className="btn btn-active btn-ghost" onClick={handleLogOut}>log Out</button>
        </> : <>
        <li>
        <Link to={"/login"}>LogIn</Link>
      </li>
      </>
      }
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10  text-white max-w-screen-xl bg-black bg-opacity-20">
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
                {
                    navItem
                }
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-2xl">STAR-MARK</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
                navItem
            }
          </ul>
        </div>
        <div className="navbar-end">
          
           {
            user?.email &&
            <h1>{user.email}</h1>
           }
          
          <a className="btn" >LogOut</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;

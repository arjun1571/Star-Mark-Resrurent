import { Link, Outlet } from "react-router-dom";
import {  FaBook, FaCalendar, FaCartPlus, FaHome, FaRedRiver, FaWallet } from 'react-icons/fa';
import {  BiMenu } from 'react-icons/bi';


const Dashbord = () => {
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
    {/* Page content here */}
    {
        <Outlet></Outlet>
    }
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><Link><FaHome /> User Home</Link></li>
      <li><Link><FaCalendar /> Reservation</Link></li>
      <li><Link><FaWallet /> payment history</Link></li>
      <li><Link to={'my-cart'}><FaCartPlus /> my cart</Link></li>
      <li><Link><FaRedRiver /> add review</Link></li>
      <li><Link><FaBook /> my booking</Link></li>
      <div className="divider"></div>
      <li>
        <Link to={"/"}> <FaHome></FaHome> Home</Link>
      </li>
      <li>
        
        <Link to={"/menu"}> <BiMenu></BiMenu> Menu</Link>
      </li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashbord;
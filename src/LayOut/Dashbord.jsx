import { NavLink, Outlet } from "react-router-dom";
import {
  FaBook,
  FaCalendar,
  FaCartPlus,
  FaHome,
  FaPrescriptionBottleAlt,
  FaRedRiver,
  FaUsers,
  FaWallet,
} from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import useCart from "../Hooks/useCart";

const Dashbord = () => {
    const [cart]=useCart()
    const isAdmin = true;
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* Page content here */}
        {<Outlet></Outlet>}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-[#D1A054] text-base-content">
          {/* Sidebar content here */}
          {
            isAdmin ? <>
            <li>
            <NavLink to={"user-home"}>
              <FaHome /> Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"reservation"}>
              <FaPrescriptionBottleAlt /> Add Items
            </NavLink>
          </li>
          <li>
            <NavLink to={"history"}>
              <FaWallet /> Manage Items
            </NavLink>
          </li>
          <li>
            <NavLink to={"alluser"}>
              <FaUsers /> All User
            </NavLink>
          </li>
            </>:
            <>
            <li>
            <NavLink to={"user-home"}>
              <FaHome /> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"reservation"}>
              <FaCalendar /> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to={"history"}>
              <FaWallet /> payment history
            </NavLink>
          </li>
          <li>
            <NavLink to={"my-cart"}>
              <FaCartPlus /> my cart <div className="badge badge-secondary">{cart?.length || 0}</div>
            </NavLink>
          </li>
          <li>
            <NavLink to={"review"}>
              <FaRedRiver /> add review
            </NavLink>
          </li>
          <li>
            <NavLink to={"booking"}>
              <FaBook /> my booking
            </NavLink>
          </li>
            </>
          }
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              {" "}
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/menu"}>
              {" "}
              <BiMenu></BiMenu> Menu
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashbord;

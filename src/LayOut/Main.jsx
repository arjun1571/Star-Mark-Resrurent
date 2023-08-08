import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
import NavBar from "../Component/NavBar/NavBar";


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
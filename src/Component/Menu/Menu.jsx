import { Helmet } from "react-helmet-async";
import MenuCover from "../MenuCover/MenuCover";
import img from "../../assets/menu/banner3.jpg"
import PapularItem from "../PapularItem/PapularItem";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>STAR Mark | Menu</title>
      </Helmet>
      <MenuCover img={img} title="Our menu" ></MenuCover>
      <PapularItem></PapularItem>
      <MenuCover img={img} title="Our menu" ></MenuCover>
      <PapularItem></PapularItem>
      <MenuCover img={img} title="Our menu" ></MenuCover>
      <PapularItem></PapularItem>
      <MenuCover img={img} title="Our menu" ></MenuCover>
      <PapularItem></PapularItem>
    </div>
  );
};

export default Menu;

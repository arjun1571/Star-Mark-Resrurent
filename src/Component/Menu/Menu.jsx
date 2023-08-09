import { Helmet } from "react-helmet-async";
import MenuCover from "../MenuCover/MenuCover";
import img from "../../assets/menu/banner3.jpg"
import img2 from "../../assets/menu/pizza-bg.jpg"
import img3 from "../../assets/menu/dessert-bg.jpeg"
import img4 from "../../assets/menu/salad-bg.jpg"
import img5 from "../../assets/menu/soup-bg.jpg"
import UseHooks from "../../Hooks/UseHooks";
import MenuItem from "../MenuItem/MenuItem";
import SectionTitle from "../SectionTitle/SectionTitle";


const Menu = () => {
    const [menu]=UseHooks()
    const offeredItem = menu.filter(item => item.category === 'offered')
    const supeItem = menu.filter(item => item.category === 'soup')
    const dessertItem = menu.filter(item => item.category === 'salad')
    const saladItem = menu.filter(item => item.category === 'dessert')
    const drinksItem = menu.filter(item => item.category === 'drinks')
    const pizzaItem = menu.filter(item => item.category === 'pizza')
  return (
    <div>
      <Helmet>
        <title>STAR Mark | Menu</title>
      </Helmet>
      <MenuCover img={img} title="Our menu" des="Would you like to try a dish?" ></MenuCover>
      <SectionTitle title={"Don't miss"} subtitle={"today's offer"}></SectionTitle>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 mt-10 mb-4">
        {
            offeredItem.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
        }
      </div>
      {/* supe  */}
      <MenuCover img={img5} title="Supe" des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." ></MenuCover>
      <SectionTitle title={"Don't miss"} subtitle={"SOUP"}></SectionTitle>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 mt-10 mb-4">
        {
            supeItem.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
        }
      </div>
      {/* DESSERTS  */}
      <MenuCover img={img3} title="DESSERTS" des='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' ></MenuCover>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 mt-10 mb-4">
        {
            dessertItem.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
        }
      </div>
     {/* SALADS  */}
      <MenuCover img={img4} title="SALADS" des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." ></MenuCover>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 mt-10 mb-4">
        {
            saladItem.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
        }
      </div>
     {/* anothe  */}
      <MenuCover img={img} title="drinks" des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." ></MenuCover>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 mt-10 mb-4">
        {
            drinksItem.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
        }
      </div>
       {/* pizza  */}
      <MenuCover img={img2} title="PIZZA" des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." ></MenuCover>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 mt-10 mb-4">
        {
            pizzaItem.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
        }
      </div>
    </div>
  );
};

export default Menu;

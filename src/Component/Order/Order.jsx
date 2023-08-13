import MenuCover from "../MenuCover/MenuCover";
import img from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import UseHooks from "../../Hooks/UseHooks";
import OrderTab from "./OrderTab";
import { Helmet } from "react-helmet";

const Order = () => {
  const [item, setItem] = useState(0);
  const [menu] = UseHooks();
  const supeItem = menu.filter((item) => item.category === "soup");
  const dessertItem = menu.filter((item) => item.category === "salad");
  const saladItem = menu.filter((item) => item.category === "dessert");
  const drinksItem = menu.filter((item) => item.category === "drinks");
  const pizzaItem = menu.filter((item) => item.category === "pizza");
  return (
    <div>
      <Helmet>
        <title>STAR Mark | Order Food</title>
      </Helmet>
      <MenuCover
        img={img}
        title={"OUR SHOP"}
        des={"Would you like to try a dish?"}
      ></MenuCover>

      <div className="text-center">
        <Tabs defaultIndex={item} onSelect={(index) => setItem(index)}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRIKS</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={saladItem}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizzaItem}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={supeItem}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={dessertItem}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinksItem}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;

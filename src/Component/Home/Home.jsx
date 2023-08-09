import BoosBanner from "../BoosBanner/BoosBanner";
import OurMenu from "../OurMenu/OurMenu";
import PapularItem from "../PapularItem/PapularItem";
import Recomendas from "../Recomendas/Recomendas";
import TestiMonial from "../Testimonial/TestiMonial";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>STAR Mark | Home</title>
      </Helmet>

      <Banner></Banner>
      <Categories></Categories>
      <BoosBanner></BoosBanner>
      <PapularItem></PapularItem>
      <Recomendas></Recomendas>
      <OurMenu></OurMenu>
      <TestiMonial></TestiMonial>
    </div>
  );
};

export default Home;

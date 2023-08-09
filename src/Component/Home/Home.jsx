import BoosBanner from "../BoosBanner/BoosBanner";
import PapularItem from "../PapularItem/PapularItem";
import Recomendas from "../Recomendas/Recomendas";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <BoosBanner></BoosBanner>
            <PapularItem></PapularItem>
            <Recomendas></Recomendas>
        </div>
    );
};

export default Home;
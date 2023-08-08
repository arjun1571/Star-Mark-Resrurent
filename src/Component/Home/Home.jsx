import BoosBanner from "../BoosBanner/BoosBanner";
import PapularItem from "../PapularItem/PapularItem";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <BoosBanner></BoosBanner>
            <PapularItem></PapularItem>
        </div>
    );
};

export default Home;
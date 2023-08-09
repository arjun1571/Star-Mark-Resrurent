import SectionTitle from "../SectionTitle/SectionTitle";
import img1 from "../../assets/menu/salad-bg.jpg"
import RecomendasCard from "./RecomendasCard";


const Recomendas = () => {
    const datas = [
        {
            id:1,
            name:"Caeser Salad",
            des:"Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
            img: img1
        },
        {
            id:1,
            name:"Caeser Salad",
            des:"Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
            img: img1
        },
        {
            id:1,
            name:"Caeser Salad",
            des:"Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
            img: img1
        },
    ]
    return (
        <div>
            <div>
                <SectionTitle title={"Should Try"} subtitle={"CHEF RECOMMENDS"}></SectionTitle>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 p-2">
                {
                    datas.map(data => <RecomendasCard data={data} key={data.id}></RecomendasCard> )
                }
            </div>
            
        </div>
    );
};

export default Recomendas;
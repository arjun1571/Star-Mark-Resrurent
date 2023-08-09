import SectionTitle from "../SectionTitle/SectionTitle";
import img from "../../assets/home/featured.jpg"
import "./OurMenu.css"

const OurMenu = () => {
    return (
        <div className="background bg-fixed py-10 mb-10">
            <div className="text-white ">
                <SectionTitle title={"Cheak it Out"} subtitle={"from our menu"}></SectionTitle>
            </div>
            <div  className="md:flex lg:p-32 md-5 justify-center items-center p-2  ">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="md:ml-16 text-white ">
                    <h1>Aug 9, 2023</h1>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-2  my-3 uppercase text-white">Read More </button>
                </div>
            </div>
            
        </div>
    );
};

export default OurMenu;

import SectionTitle from "../SectionTitle/SectionTitle";
import MenuItem from "../MenuItem/MenuItem";
import UseHooks from "../../Hooks/UseHooks";


const PapularItem = () => {
    const [menu]=UseHooks()
    const papular = menu.filter(item => item.category === "popular")
    
    return (
        <div>
            <div>
                <SectionTitle title={"Cheak it out"} subtitle={"FROM OUR MENU"}></SectionTitle>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 mt-10 mb-4">
                {
                    papular.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <button className="btn mb-10 flex  mx-auto btn-outline border-0 border-b-2  uppercase"> View full menue </button>
            <div className=" ">
                <h1 className="bg-black text-white text-center p-10 text-xl md:text-4xl mb-10">Call Us: +8801824751931</h1>
            </div>
            
        </div>
    );
};

export default PapularItem;
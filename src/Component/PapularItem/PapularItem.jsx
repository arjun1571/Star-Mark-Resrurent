import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import MenuItem from "../MenuItem/MenuItem";


const PapularItem = () => {
    const [menu,setMenu]=useState([])
    useEffect(()=>{
        fetch("menu.json")
        .then(res=>res.json())
        .then(data=>{
            const filterItem = data.filter(item => item.category === 'popular')
            setMenu(filterItem)
        })
    },[])
    return (
        <div>
            <div>
                <SectionTitle title={"Cheak it out"} subtitle={"FROM OUR MENU"}></SectionTitle>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 my-10">
                {
                    menu.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            
        </div>
    );
};

export default PapularItem;
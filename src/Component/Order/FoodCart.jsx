import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const FoodCart = ({item}) => {
  const [, refetch]=useCart()
  const location =useLocation()
  const navigate = useNavigate()
  const {user}=useContext(AuthContext)
    const {name,image,price,recipe,_id}=item
    const handleCart =(mitem)=>{
      console.log(mitem);
      if(user && user?.email){
        const createItem = {menuItemId: _id,name,price,email:user.email,image}
        fetch("http://localhost:5000/carts",{
          method: "POST",
          headers:{
            "content-type":"application/json"
          },
          body: JSON.stringify(createItem)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.insertedId){
            refetch()
            Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: 'Food added on the card saved',
              showConfirmButton: false,
              timer: 1500
            })
          }
          
        })
      }
      else{
        Swal.fire({
          title: 'please login fist',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'log in now'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login",{state: {from:location}})
          }
        })
      }
    }
    return (
        <div className="card bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <h2 className="text-2xl font-bold bg-black absolute right-0 mr-6 p-2 rounded-xl mt-4 text-yellow-500">${price}</h2>
  <div className="card-body">
    <h2 className="card-title justify-center">{name}</h2>
    <p className="justify-center">{recipe}</p>
    
    <div className="card-actions justify-center">
      <button onClick={()=> handleCart(item)} className="btn  border-0 border-b-2 border-orange-400 uppercase btn-outline btn-defult">Add to Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCart;
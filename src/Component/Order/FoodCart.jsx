
const FoodCart = ({item}) => {
    const {name,image,price,recipe}=item
    return (
        <div className="card bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <h2 className="text-2xl font-bold bg-black absolute right-0 mr-6 p-2 rounded-xl mt-4 text-yellow-500">${price}</h2>
  <div className="card-body">
    <h2 className="card-title justify-center">{name}</h2>
    <p className="justify-center">{recipe}</p>
    
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCart;
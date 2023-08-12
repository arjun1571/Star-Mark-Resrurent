
import FoodCart from './FoodCart';

const OrderTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-3 grid-cols-1 my-10">
        {
            items.map(item=> <FoodCart key={item._id} item={item}></FoodCart>)
        }
        </div>
    );
};

export default OrderTab;
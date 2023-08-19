import useCart from "../../Hooks/useCart";


const MyCart = () => {
    const [cart]=useCart()
    const total = cart.reduce((sum,item)=> item.price + sum, 0)
    return (
        <div>  
            <div className="text-center md:mt-10 mt-5 ">
                <h1 className="text-yellow-400">--My Cart--</h1>
                <div className="divider w-60 mx-auto"></div>
                <h1 className="md:text-2xl text-xl font-bold">WANNA ADD MORE?</h1>
                <div className="divider w-60 mx-auto"></div>
            </div>
            <div className="md:p-10 p-2 flex justify-between">
                <h1 className="md:text-2xl text-xl font-bold">Total orders: {cart.length}</h1>
                <h1 className="md:text-2xl text-xl font-bold">Total Price: ${total}</h1>
                <button className="btn btn-warning btn-sm">PAY</button>
                
            </div>
        </div>
    );
};

export default MyCart;
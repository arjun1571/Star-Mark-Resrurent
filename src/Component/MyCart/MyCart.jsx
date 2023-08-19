import { Helmet } from "react-helmet";
import useCart from "../../Hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";

const MyCart = () => {
  const [cart] = useCart();
  console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  return (
    <div>
      <Helmet>
        <title>My-Cart | STAR Mark </title>
      </Helmet>
      <div className="text-center md:mt-10 mt-5 ">
        <h1 className="text-yellow-400">--My Cart--</h1>
        <div className="divider w-60 mx-auto"></div>
        <h1 className="md:text-2xl text-xl font-bold">WANNA ADD MORE?</h1>
        <div className="divider w-60 mx-auto"></div>
      </div>
      <div className="md:p-10 flex justify-evenly">
        <h1 className="md:text-2xl text-xl font-bold">
          Total orders: {cart.length}
        </h1>
        <h1 className="md:text-2xl text-xl font-bold">Total Price: ${total}</h1>
        <button className="btn btn-warning btn-sm">PAY</button>
      </div>
      <div>
        <div className="overflow-x-auto lg:mx-20">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>#</label>
                </th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <>
                  <tr>
                    <th>
                      <label>{index + 1}</label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td className=" font-bold">${item.price}</td>
                    <th>
                      <button className="btn btn-ghost btn-xl text-white bg-red-800">
                        <FaTrashAlt></FaTrashAlt>
                      </button>
                    </th>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
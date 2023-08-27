import { loadStripe } from "@stripe/stripe-js";
import { Helmet } from "react-helmet";
import CheakOut from "./CheakOut";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);

const Pay = () => {
  return (
    <div>
      <Helmet>
        <title>Payment | STAR Mark </title>
      </Helmet>
      <div className="text-center md:mt-10 mt-5 ">
        <h1 className="text-yellow-400">--Please Payment--</h1>
        <div className="divider w-60 mx-auto"></div>
        <h1 className="md:text-2xl text-xl font-bold uppercase">Payment Now</h1>
        <div className="divider w-60 mx-auto"></div>
      </div>
      <Elements stripe={stripePromise}>
        <CheakOut></CheakOut>
      </Elements>
    </div>
  );
};

export default Pay;

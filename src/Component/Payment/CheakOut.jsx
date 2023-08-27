import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";


const CheakOut = () => {
    const stripe = useStripe()
    const elements = useElements()
    const [cardError,setError] = useState('');
    const handleSubmit= async(event)=>{
        event.preventDefault()
        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement)
        if(card == null){
            return;
        }
        const {error,paymentMethod} = await stripe.createPaymentMethod({
          type: "card",
          card
        })
        if(error){
          setError(error.message)
        }
        else{
          setError('')
          console.log("payment method",paymentMethod);
        }
        
    }
    return (
      <>
              <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn btn-success w-40 btn-sm btn-outline" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {
        cardError && <p className="text-red-600">{cardError}</p>
      }
      </>
    );
};

export default CheakOut;
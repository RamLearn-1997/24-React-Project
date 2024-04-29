import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartTile from "../component/card-tile";

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);

  const { cart } = useSelector((state) => state);

  useEffect(() => {
    const totalPrice = cart.reduce((acc, curr) => acc + parseInt(curr.price), 0);
    setTotalCart(totalPrice);
  }, [cart]);

  return (
    <div className="flex justify-center">
      {cart && cart.length ? (
        <>
        <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto mt-20">
          <div className="flex flex-col justify-center items-left p-3">
            {
                cart.map(cartItem => <CartTile cartItem={cartItem}/>)
            }
          </div>
        </div>
        <div className="w-[300px] mt-40">
        <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
           <h1 className="font-semibold text-lg text-red-400">Your Cart Summary</h1>
           <p>
            <span className="text-gray-300 font-semibold">Total Items :</span>  
            <span className="text-gray-200 font-medium"> {cart.length}</span>  
           </p>
           <p>
            <span className="text-gray-300 font-semibold">Total Amount : </span>  
            <span className="text-gray-200 font-medium">${totalCart}</span>  
           </p>
        </div>
        </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-300 text-2xl font-semibold mb-4">Your Cart is empty</h1>
          <Link to={"/"}>
            <button className="bg-red-400 text-white rounded-lg font-bold p-2">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

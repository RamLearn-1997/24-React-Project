import { useDispatch} from "react-redux";
import { removeFromCart } from "../../store/slices/cart-slice";

export default function CartTile({ cartItem }) {

    const dispatch = useDispatch();

    function handleRemoveFromCart(){
        dispatch(removeFromCart(cartItem.id));
    }

  return (

    

    <>
      <div className="flex items-center p-5 justify-between bg-slate-200 mt-2 mb-2 rounded-xl">
        <div className="flex p-3">
          <img
            src={cartItem?.image}
            alt={cartItem?.title}
            className="h-28 rounded-lg"
          />
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-gray-800 font-bold text-sm">
              {cartItem?.title}
            </h1>
            <p className="text-gray-800 font-semibold">${cartItem?.price}</p>
          </div>
          <div>
            <button
              onClick={
                () => handleRemoveFromCart() // Fix is here
              }
              className="bg-red-400 text-white text-sm rounded-lg font-bold p-2 ml-10">
               Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

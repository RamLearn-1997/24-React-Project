import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cart-slice";

export default function ProductTile({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart); // Updated selector to only select the cart slice

  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(product.id));
  }

  return (
    <div>
      <div className="group flex flex-col items-center border-2 border-slate-300 gap-3 p-4 h-[300px] mt-10 ml-5 rounded-xl bg-white">
        <div className="h-[150px] ">
          <img
            src={product?.image}
            alt={product?.title}
            className="object-cover h-full w-full "
          />
        </div>
        <div>
          <h1 className="w-40 truncate mt-3 text-gray-900 font-medium text-md">
            {product?.title}
          </h1>
        </div>
        <div className="flex items-center justify-center w-full mt-5">
          <button
            onClick={
              cart.some((item) => item.id === product.id)
                ? () => handleRemoveFromCart()  // Fix is here
                : () => handleAddToCart()  // Fix is here
            }
            className="bg-red-400 text-white rounded-lg font-bold p-2">
            {cart.some((item) => item.id === product.id)
              ? "Remove From Cart"
              : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

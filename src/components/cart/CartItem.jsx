import formatCurrency from "../../utils/formatCurrency";
import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity, removeFromCart } from "../../features/cart/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { id, name, price, image, quantity } = item;
  const totalPrice = price * quantity;

  const handleRemove = () => dispatch(removeFromCart(id));

  return (
    <div className="mb-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-md dark:hover:shadow-lg">
      <div className="flex flex-col md:flex-row items-center p-4 gap-4">
        <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden shadow-sm">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>

        <div className="flex-1 min-w-0">
          <h6 className="font-semibold text-gray-900 dark:text-white truncate">{name}</h6>
          <p className="text-blue-600 dark:text-blue-400 font-medium">{formatCurrency(price)}</p>
        </div>

        <div className="flex items-center bg-gray-50 dark:bg-gray-700 rounded-lg px-2 py-1 w-28 justify-center">
          <button
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-600 hover:shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-500"
            onClick={() => dispatch(decrementQuantity(id))}
            aria-label="Decrease quantity"
            disabled={quantity <= 1}
          >
            −
          </button>
          <span className="mx-2 font-semibold text-gray-900 dark:text-white min-w-[1.8rem] text-center tabular-nums">
            {quantity}
          </span>
          <button
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-600 hover:shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-500"
            onClick={() => dispatch(incrementQuantity(id))}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <div className="hidden md:block font-semibold text-gray-900 dark:text-white min-w-[80px] text-right tabular-nums">
          {formatCurrency(totalPrice)}
        </div>

        <div className="flex justify-center">
          <button
            className="w-8 h-8 rounded-full bg-red-50 dark:bg-red-900/30 text-red-500 dark:text-red-400 flex items-center justify-center hover:bg-red-100 dark:hover:bg-red-800/50 transition-colors focus:outline-none focus:ring-2 focus:ring-red-300 dark:focus:ring-red-500"
            onClick={handleRemove}
            aria-label="Remove item"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
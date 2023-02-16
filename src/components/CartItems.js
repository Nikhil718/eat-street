import { useDispatch, useSelector } from "react-redux";
import { getTotalAmount, removeItem } from "./shared/cartSlice";

const CartItems = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();
  const handelRemoveItem = (item) => {
    dispatch(removeItem(item));
    dispatch(getTotalAmount());
  };

  return (
    <ul>
      {cartItems.map((item) => (
        <div className="ml-2" key={item.id}>
          <li className=" w-[600px] h-36 p-2 m-1 shadow-lg hover:shadow-2xl rounded-lg">
            <div>
              <div className="text-sm font-bold ml-2">
                {item?.name}
                {item.isVeg == 0 ? <span>🔴</span> : <span> 🟢 </span>}
              </div>

              <div className="ml-2">
                {item?.price / 100 == 0 ? (
                  <span className="text-sm mr-1 ">
                    ₹{item?.defaultPrice / 100}
                  </span>
                ) : (
                  <span className="text-sm mr-1 ">₹{item?.price / 100}</span>
                )}
                <p>{item.category}</p>
                <p className="text-[12px]">{item.description}</p>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => {
                    handelRemoveItem(item);
                  }}
                  className=" p-1 rounded-lg bg-red-400  text-[11px] hover:bg-red-500 text-white "
                >
                  REMOVE
                </button>
              </div>
            </div>
          </li>
        </div>
      ))}
    </ul>
  );
};
export default CartItems;

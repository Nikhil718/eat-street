import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartItems from "./CartItems";
import { clearCart, getTotalAmount } from "./shared/cartSlice";
import CheckOut from "./CheckOut";
import { useEffect } from "react";

const Cart = () => {
  const itemLength = useSelector((store) => store.cart.items.length);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleCartClear = () => {
    dispatch(clearCart());
  };

  return itemLength == 0 ? (
    <div>
      <div data-testid="complete-cart" className="flex justify-center">
        <img
          alt="cart-empty-img"
          src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png"
        />
      </div>
      <div className="flex justify-center">
        <Link to="/">
          <button className="bg-green-400 rounded-lg p-2 m-5">Add</button>
        </Link>
      </div>
    </div>
  ) : (
    <div className="flex justify-between">
      <div>
        <h2 className="text-3xl font-bold m-5 underline">
          Cart - {itemLength} food item/'s
        </h2>

        <div>
          <CartItems />
          {itemLength > 0 && (
            <button
              className="bg-red-500 hover:bg-red-600 rounded-lg p-1 m-3 text-white"
              onClick={() => {
                handleCartClear();
              }}
            >
              Clear Cart
            </button>
          )}
        </div>
      </div>
      {itemLength > 0 && <CheckOut />}
    </div>
  );
};
export default Cart;

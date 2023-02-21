import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotalAmount } from "./shared/cartSlice";
import Cart from "./Cart";
import CartItems from "./CartItems";

const CheckOut = () => {
  const cartAmount = useSelector((store) => store.cart.cartTotalAmount);
  console.log(cartAmount);
  const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(getTotalAmount());
  //   }, [CartItems]);
  return (
    <div className="w-[450px] h-96 p-10 m-7   bg-slate-100 shadow-lg hover:shadow-2xl">
      <h1 className="text-2xl text-black-800 font-bold">Order Summary</h1>
      <div>
        <h1 className=" text-xl  p-2 text-green-800 font-semibold">
          Price - ₹{cartAmount / 100}
        </h1>
        <h1 className="text-xl p-1 text-green-800 font-semibold">
          Delivery Charges - Free
        </h1>
        <h1 className="text-xl p-1 text-green-800 font-semibold">
          {" "}
          Subtotal - ₹{cartAmount / 100}{" "}
        </h1>
        <div>
          <p class="mb-4 italic">
            If you have a coupon code, please enter it in the box below
          </p>
          <div class="justify-center md:flex">
            <div className="flex justify-center items-center w-full h-13 p-2  bg-gray-100 border rounded-full">
              <input
                type="coupon"
                name="code"
                id="coupon"
                placeholder="Apply coupon"
                value="FREEDELIVERY2023"
                className="w-52 rounded-lg bg-white-100 border-none appearance-none focus:outline-none"
              />
              <button className="text-sm flex items-center px-3 py-1">
                <span class="font-medium rounded-lg bg-green-600 hover:bg-green-500 text-white p-1">
                  Apply coupon
                </span>
              </button>
            </div>
          </div>
        </div>
        <button className="flex justify-center w-full p-2 uppercase rounded-lg bg-gray-600 mt-2 hover:bg-gray-500">
          <span className="font-medium text-white p-1">
            Proceed to CheckOut ➡️
          </span>
        </button>
      </div>
    </div>
  );
};
export default CheckOut;

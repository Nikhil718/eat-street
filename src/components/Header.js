import { useState } from "react";
import Logo from "../assets/img/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loggedUserIn, loggedUserOut } from "./shared/userInfoSlice";
import { clearCart } from "./shared/cartSlice";

const TitleLeft = () => {
  return (
    <a href="/">
      <img className="h-28 w-24 pl-3 py-2" alt="logo" src={Logo}></img>
    </a>
  );
};
const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const user = useSelector((store) => store.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setLoggedUserOut = (value) => {
    dispatch(clearCart());
    dispatch(loggedUserOut(value));
  };
  const checkLoggedIn = () => {
    if (user.isLoggedIn == false) {
      navigate("/login");
    } else {
      navigate("/cart");
    }
  };

  return (
    <div className="flex justify-between  bg-white p-2 dark:bg-black ">
      <TitleLeft />
      {user.isLoggedIn && (
        <h2 className="text-white text-xl font-bold m-10">
          Welcome back {user.user[0]?.name}
        </h2>
      )}
      <div className="flex">
        <ul className="flex py-9 ">
          <li className="px-2">
            <Link
              className=" py-2 px-2 bg-white rounded-2xl   hover:bg-slate-300"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="px-2">
            <Link
              className="py-2 px-2 bg-white rounded-2xl   hover:bg-slate-300"
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="px-2">
            <Link
              className=" py-2 px-2 bg-white rounded-2xl   hover:bg-slate-300"
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li className="px-2">
            <Link
              className=" py-2 px-2 bg-white rounded-2xl   hover:bg-slate-300 "
              to="/help"
            >
              Help
            </Link>
          </li>
          <li className="px-2  text-white hover:text-slate-300">
            <button onClick={checkLoggedIn}>
              <Link to="/cart" class="relative flex ">
                <svg
                  className="flex-1 w-10 h-9 fill-current"
                  viewBox="0 0 27 27"
                >
                  <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                </svg>
                <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                  {cartItems.length}
                </span>
              </Link>
            </button>
          </li>

          <li className=" px-2">
            {user.isLoggedIn ? (
              <Link to="/login">
                <button
                  className="pr-4"
                  onClick={() => {
                    setLoggedUserOut(false);
                  }}
                >
                  <span className="py-2 px-2  bg-red-400 rounded-2xl text-white  ">
                    Logout
                  </span>
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button className="pr-4">
                  <span className="py-2 px-2 pr-2 bg-green-400 rounded-2xl text-white ">
                    Login
                  </span>
                </button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;

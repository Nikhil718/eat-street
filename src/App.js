import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import ErrorElement from "./components/Error";
import AboutUs from "./components/About";
import ContactUs from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Help from "./components/Help";
import { Provider } from "react-redux";
import store from "./components/shared/store";
import Cart from "./components/Cart";
import Login from "./components/Login";

const AppLayout = () => {
  return (
    <>
      <Provider store={store}>
        <div className="flex flex-col h-screen justify-between">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: <AboutUs />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/restaurant/:restaurantId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

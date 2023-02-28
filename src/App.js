import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import ErrorElement from "./components/Error";
import AboutUs from "./components/About";
import Offers from "./components/Offers";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Help from "./components/Help";
import { Provider } from "react-redux";
import store from "./components/shared/store";
import Cart from "./components/Cart";
import PrivateRoute from "./components/PrivateRoute";

const AppLayout = () => {
  return (
    <>
      <Provider store={store}>
        <div className="flex flex-col h-screen justify-between font-serif">
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
        path: "/offers",
        element: <Offers />,
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
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

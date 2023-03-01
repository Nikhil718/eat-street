import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../mocks/restaurantData";
import "@testing-library/jest-dom";
import store from "../shared/store";
import "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";

test("Restaurant results should load on searching", async () => {
  const menu = render(
    <StaticRouter>
      <Provider store={store}>
        <Cart />
      </Provider>
    </StaticRouter>
  );

  const completeCart = menu.getByTestId("complete-cart");
  expect(completeCart).toBeInTheDocument();
});

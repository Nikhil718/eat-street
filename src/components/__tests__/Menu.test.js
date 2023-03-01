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

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test("Restaurant results should load on searching", async () => {
  const menu = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
        <Cart />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(menu.getByTestId("menu-item")));
  const addBtn = menu.getAllByTestId("add-Btn");
  fireEvent.click(addBtn[0]);
  const cart = menu.getByTestId("cart");
  expect(cart.innerHTML).toBe("1");

  //   const completeCart = menu.getByTestId("complete-cart");
  //   console.log(completeCart);
});

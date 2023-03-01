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
import Offers from "../Offers";
import { OFFER_DATA } from "../../mocks/offerData";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(OFFER_DATA);
    },
  });
});

test("Offers results should load on clicking offers page", async () => {
  const offer = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <Offers />
      </Provider>
    </StaticRouter>
  );

  const discount = offer.getByTestId("discount");
  fireEvent.click(discount);
  await waitFor(() => expect(offer.getByTestId("offers")));
  const offers = offer.getByTestId("offers");
  expect(offers).toBeInTheDocument();
});

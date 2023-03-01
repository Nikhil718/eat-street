import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/restaurantData";
import Body from "../Body";
import store from "../shared/store";
import Shimmer from "../Shimmer";
import "@testing-library/jest-dom";

test("Shimmer should load on page loading", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Shimmer />
      </Provider>
    </StaticRouter>
  );

  const shimmer = body.getByTestId("shimmer");
  expect(shimmer).toBeInTheDocument();
});

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("Restaurant results should load on searching", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));

  const input = body.getByTestId("search-input");
  fireEvent.change(input, {
    target: {
      value: "food",
    },
  });
  const reslist = body.getByTestId("restaurant-list");
  expect(reslist.children.length).toBe(2);
});

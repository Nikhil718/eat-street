import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../shared/store";
import { StaticRouter } from "react-router-dom/server";
import "@testing-library/jest-dom";

test("Logo should load after page loades", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const logo = header.getAllByTestId("logo");
  expect(logo[0]).toBeInTheDocument();
});

test("cart items should be zero when page loads", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const cart = header.getByTestId("cart");
  expect(cart.innerHTML).toBe("0");
});

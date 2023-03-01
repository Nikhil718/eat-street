import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../../config";

const useRestaurant = (restaurantId) => {
  const [restaurantData, setRestaurantData] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(FETCH_MENU_URL + restaurantId);
    const json = await data.json();

    setRestaurantData(json.data);
  }
  return restaurantData;
};
export default useRestaurant;

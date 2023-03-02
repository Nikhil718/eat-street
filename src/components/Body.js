import RestaurantCard from "./RestaurantCard";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "./shared/helper";

import CoverImage from "../assets/img/poster.jpg";
import { TypeAnimation } from "react-type-animation";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getAllRestaurants();
  }, []);

  // getting all restaurants by api call

  async function getAllRestaurants() {
    const data = await fetch(
      "https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);

    setFilteredRes(json?.data?.cards[2]?.data?.data?.cards);
    console.log(json?.data?.cards[2]?.data?.data?.cards);
  }

  if (!allRestaurants) return null;

  return allRestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className=" p-16 " style={{ backgroundImage: `url(${CoverImage})` }}>
        <div className="m-7 font-mono text-white ">
          <TypeAnimation
            sequence={[
              "Burger mangoge 🍔, Burger denge",
              2000,
              "Pizza mangoge 🍕, Pizza denge",
              2000,
            ]}
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "2em" }}
          />
        </div>
        <div data-testid="search-btn">
          <input
            data-testid="search-input"
            className="w-[450px] border-2 border-solid p-2 rounded-l-full"
            type="text"
            placeholder="Search any restaurant..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              const data = filterData(e.target.value, allRestaurants);

              setFilteredRes(data);
            }}
          />
          <button className="bg-gray-200 rounded-r-full p-2 m-1">🔍</button>
        </div>
      </div>

      <div className=" p-2 font-bold text-2xl ml-36">
        <p>{filteredRes.length} Restaurants Near You</p>
      </div>

      <div
        className=" px-11 flex flex-wrap justify-center"
        data-testid="restaurant-list"
      >
        {filteredRes.length == 0 ? (
          <h3>No match found for "{searchText}". Try different restaurant.</h3>
        ) : (
          filteredRes.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
              >
                <RestaurantCard {...restaurant.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};
export default Body;

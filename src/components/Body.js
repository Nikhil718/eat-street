import RestaurantCard from "./RestaurantCard";
import { restaurantList, CAROUSEL_URL } from "../config";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "./shared/helper";
import CarouselCard from "./CarouselCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [carouselRestaurant, setcarouselRestaurant] = useState([]);
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
    setcarouselRestaurant(json?.data?.cards[0]?.data?.data?.cards);
    setFilteredRes(json?.data?.cards[2]?.data?.data?.cards);
    console.log(json?.data?.cards[2]?.data?.data?.cards);
  }

  if (!allRestaurants) return null;

  return allRestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-8 flex ">
        {carouselRestaurant.map((carouselRes) => {
          return (
            <Link to={""} key={carouselRes.data.bannerId}>
              <CarouselCard {...carouselRes.data} />
            </Link>
          );
        })}
      </div>

      <div className=" flex items-center  mx-auto p-3 ">
        <div className=" w-96 p-2  text-md  border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500  dark:bg-purple-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black ">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type="text"
            className="outline-none dark:bg-purple-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black p-1"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              const data = filterData(e.target.value, allRestaurants);
              {
                console.log(data);
              }
              setFilteredRes(data);
            }}
          />
        </div>
      </div>
      <div className="font-bold text-2xl ml-36">
        <p>{allRestaurants.length} Restaurants Near You</p>
      </div>

      <div className=" px-11 flex flex-wrap justify-center">
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

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { CARD_IMG_URL } from "../config";
import { addItem } from "./shared/cartSlice";
import useRestaurant from "./shared/useRestaurant";
import { getTotalAmount } from "./shared/cartSlice";

const RestaurantMenu = () => {
  const [isVisibal, setIsVisibal] = useState(false);
  const { restaurantId } = useParams();
  const restaurantData = useRestaurant(restaurantId);

  const dispatch = useDispatch();

  const handelAddItem = (item) => {
    dispatch(addItem(item));

    setIsVisibal(true);
    setTimeout(() => {
      setIsVisibal(false);
    }, 5000);
    dispatch(getTotalAmount());
  };

  return !restaurantData ? (
    <h3 className="text-center">Loding menu please wait.....</h3>
  ) : (
    <div className="py-2">
      <div className=" flex bg-slate-100 w-full p-4 sticky top-0 z-20">
        <div className="ml-32 flex ">
          <img
            className="h-44 mx-3 rounded-md"
            src={CARD_IMG_URL + restaurantData.cloudinaryImageId}
          />
          <div className="p-4">
            <h1 className="font-bold text-3xl">{restaurantData.name}</h1>
            <h3 className="text-xl">{restaurantData.area}</h3>
            <h2>{restaurantData.city}</h2>
            <div className="flex font-semibold">
              <h3>{restaurantData.costForTwoMsg}</h3>
              <span className="px-1">|</span>
              <h3>{restaurantData.avgRatingString} ★ </h3>
              <span className="px-1">|</span>
              <h3>{restaurantData.totalRatingsString} </h3>
            </div>
          </div>
        </div>
        <fieldset className="m-6 border-2 border-dashed  p-3 border-gray-400">
          <legend className="text-[18px] p-2">OFFERS</legend>
          {restaurantData.aggregatedDiscountInfo?.descriptionList?.map(
            (item) => (
              <h1 className="font-bold p-2">{item.meta}</h1>
            )
          )}
        </fieldset>
        {isVisibal && (
          <h1 className="p-1 h-7 text-sm font-bold text-green-800 rounded-lg bg-green-200">
            Item added to the cart
          </h1>
        )}
      </div>
      <div className="">
        <h2
          className="text-2xl font-bold underline text-center"
          data-testid="menu-item"
        >
          Menu
        </h2>
        <ul className="flex flex-wrap justify-center mx-4">
          {Object.values(restaurantData?.menu?.items).map((item) => (
            <>
              <div
                className="w-2/4 h-52 shadow-lg hover:shadow-2xl rounded-lg flex justify-center"
                key={item.id}
              >
                <li className="  w-3/4 h-36 p-8 m-1 s">
                  <div>
                    <div className=" flex text-sm font-bold ml-2">
                      {item?.name}
                      {item.isVeg == 0 ? <span>🔴</span> : <span> 🟢 </span>}
                    </div>

                    <div className="ml-2">
                      <h1>
                        {item?.price / 100 == 0 ? (
                          <span className="text-sm mr-1">
                            ₹{item?.defaultPrice / 100}
                          </span>
                        ) : (
                          <span className="text-sm mr-1">
                            ₹{item?.price / 100}
                          </span>
                        )}
                      </h1>
                      <span> {item.description}</span>
                    </div>
                  </div>
                </li>

                <div className="">
                  {item.cloudinaryImageId === "" ? (
                    <img
                      className="w-28 h-20 m-3 rounded-lg"
                      src="https://t3.ftcdn.net/jpg/00/70/49/52/360_F_70495270_2aJc2punK2LJVhMCU7zxJdjRaKBS6wjy.jpg"
                    />
                  ) : (
                    <img
                      className="w-28 h-20 m-3 rounded-lg"
                      src={CARD_IMG_URL + item?.cloudinaryImageId}
                    />
                  )}

                  <button
                    data-testid="add-Btn"
                    onClick={() => {
                      handelAddItem(item);
                    }}
                    className=" p-1 ml-11 bg-green-400 rounded text-sm "
                  >
                    ADD +
                  </button>
                </div>
              </div>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;

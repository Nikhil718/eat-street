import { CARD_IMG_URL } from "../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  deliveryTime,
  costForTwoString,
  avgRating,
  aggregatedDiscountInfo,
}) => {
  return (
    <div className="w-60 h-80 p-8 m-4  shadow-2xl hover:scale-105 border-2 rounded-lg ">
      <img alt="image" src={CARD_IMG_URL + cloudinaryImageId}></img>
      <h2 className="font-bold">{name}</h2>
      <h3 className="text-sm">{cuisines.slice(0, 6).join(", ")}</h3>
      {console.log(cuisines)}
      <h4>{deliveryTime} mins</h4>
      <h3 className="text-sm">
        {costForTwoString}{" "}
        <span
          className={
            avgRating >= 4
              ? "bg-green-400 rounded-lg font-bold p-1 text-sm ml-1"
              : "bg-orange-400 rounded-lg font-bold p-1 text-sm ml-1"
          }
        >
          {avgRating}★
        </span>
      </h3>

      <p className="font-mono mt-1 text-amber-800">
        <span className="p-[2px]">
          <FontAwesomeIcon icon={faTag} />
        </span>
        {aggregatedDiscountInfo.header}
      </p>
    </div>
  );
};
export default RestaurantCard;

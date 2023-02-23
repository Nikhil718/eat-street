import { CARD_IMG_URL } from "../config";

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
    <div className="w-60 h-80 p-8 m-4  shadow-2xl hover:shadow-inner hover:border-2 rounded-lg ">
      <img alt="image" src={CARD_IMG_URL + cloudinaryImageId}></img>
      <h2 className="font-bold">{name}</h2>
      <h3 className="text-sm">{cuisines.join(", ")}</h3>
      <h4>{deliveryTime} mins</h4>
      <h3 className="text-sm">
        {costForTwoString}{" "}
        <span
          className={
            avgRating >= 4
              ? "bg-green-400 rounded-lg font-bold p-1 text-sm"
              : "bg-orange-400 rounded-lg font-bold p-1 text-sm"
          }
        >
          {avgRating}★
        </span>
      </h3>

      <p className="font-semibold">{aggregatedDiscountInfo.header}</p>
    </div>
  );
};
export default RestaurantCard;

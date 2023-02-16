import { CARD_IMG_URL } from "../config";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  deliveryTime,
  costForTwoString,
  avgRating,
  user,
}) => {
  return (
    <div className="w-56 h-80 p-8 mx-7 shadow-lg hover:shadow-2xl ">
      <img alt="image" src={CARD_IMG_URL + cloudinaryImageId}></img>
      <h2 className="font-bold">{name}</h2>
      <h3 className="text-sm">{cuisines.join(", ")}</h3>
      <h4>{deliveryTime} mins</h4>
      <h3>
        {costForTwoString}{" "}
        <span
          className={
            avgRating >= 4
              ? "bg-green-400 rounded-lg font-bold p-1"
              : "bg-orange-400 rounded-lg font-bold p-1"
          }
        >
          {avgRating}★
        </span>
      </h3>
    </div>
  );
};
export default RestaurantCard;

import { CAROUSEL_URL } from "../config";

const CarouselCard = ({ creativeId }) => {
  return (
    <div className=" m-3 hover:-rotate-2 ">
      <img
        className=" rounded-lg w-56"
        alt="image"
        src={CAROUSEL_URL + creativeId}
      ></img>
    </div>
  );
};
export default CarouselCard;

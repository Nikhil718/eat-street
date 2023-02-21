import { CAROUSEL_URL } from "../config";

const CarouselCard = ({ creativeId }) => {
  return (
    <div className=" m-3 hover:shadow-2xl ">
      <img
        className=" rounded-lg"
        alt="image"
        src={CAROUSEL_URL + creativeId}
      ></img>
    </div>
  );
};
export default CarouselCard;

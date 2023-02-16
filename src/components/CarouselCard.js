import { CAROUSEL_URL } from "../config";

const CarouselCard = ({ creativeId }) => {
  return (
    <div>
      <img
        className="p-1 rounded-lg"
        alt="image"
        src={CAROUSEL_URL + creativeId}
      ></img>
    </div>
  );
};
export default CarouselCard;

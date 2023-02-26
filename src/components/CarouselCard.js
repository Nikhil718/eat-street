import { CAROUSEL_URL } from "../config";

const CarouselCard = ({ creativeId }) => {
  return (
    <div className="w-60">
      <img
        className="inline-block p-2 cursor-pointer rounded-2xl hover:scale-105 ease-in-out duration-300"
        alt="crousel_img"
        src={CAROUSEL_URL + creativeId}
      />
    </div>
  );
};
export default CarouselCard;

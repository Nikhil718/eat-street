import { OFFER_IMG_URL } from "../config";

const IndividualOffer = ({
  couponCode,
  logo,
  title,
  description,
  validTill,
}) => {
  return logo == null ? null : (
    <div className="w-64 h-64 p-8 m-3 border-2 border-inherit hover:shadow-2xl rounded-sm ">
      <div className="flex bg-pink-100 rounded-lg p-2 justify-center">
        <img className="w-5" src={OFFER_IMG_URL + logo} />
        <h1 className="m-1">{couponCode}</h1>
      </div>
      <p className="font-bold">{title}</p>
      <p className="text-sm">{description}</p>
      <p className="bg-green-100 p-1 w-36 rounded-lg">{validTill}</p>
    </div>
  );
};
export default IndividualOffer;

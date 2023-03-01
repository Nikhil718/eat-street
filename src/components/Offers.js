import { useEffect } from "react";
import { useState } from "react";
import { OFFERS_URL } from "../config";
import IndividualOffer from "./IndividualOffer";

const Offers = () => {
  const [allOffers, setAllOffers] = useState([]);
  useEffect(() => {
    getAllOffers();
  }, []);

  async function getAllOffers() {
    const data = await fetch(OFFERS_URL);
    const json = await data.json();
    setAllOffers(json.data.cards);
  }
  return allOffers.length == 0 ? (
    <div className="text-center">
      <h1>Loading offers please wait.....</h1>
    </div>
  ) : (
    <>
      <h1 className="font-bold text-center text-2xl m-2">Offers for you</h1>
      <div data-testid="offers" className="flex flex-wrap justify-center m-2">
        {allOffers.slice(2).map((offer) => {
          return <IndividualOffer {...offer.data?.data} />;
        })}
      </div>
    </>
  );
};
export default Offers;

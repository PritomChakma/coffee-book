import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addFavourite, getFavourite } from "../utility";

const CoffeeDetails = () => {
  const [coffee, setCoffee] = useState({});
  const [isFavourit, setIsFAvourite] = useState(false);
  const data = useLoaderData();
  const { id } = useParams();
  useEffect(() => {
    const singleData = data.find((coffee) => coffee.id == id);
    setCoffee(singleData);
    const favourit = getFavourite();
    const isExist = favourit.find((item) => item.id == singleData.id);
    if (isExist) {
      setIsFAvourite(true);
    }
  }, []);
  const {
    name,
    image,
    category,
    ingredients,
    origin,
    type,
    description,
    rating,
    popularity,
    making_process,
  } = coffee || {};
  // HandleFavourite  button CLick
  const handleFavourite = (coffee) => {
    addFavourite(coffee);
    setIsFAvourite(true);
  };

  return (
    <div className="my-12 space-y-3 w-11/12 mx-auto">
      <h1 className="text-xl md:text-3xl font-bold">{description}</h1>
      <img className="h-[350px] md:h-[500px] w-full" src={image} alt="coffee" />
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl md:text-3xl">Latte</h3>
        </div>
        <div>
          <button
            disabled={isFavourit}
            onClick={() => handleFavourite(coffee)}
            className="btn btn-warning font-bold"
          >
            Add Favourite
          </button>
        </div>
      </div>
      <p className="md:text-xl">
        <span className="font-bold mr-3">Popularity:</span>
        {popularity}
      </p>
      <p className="md:text-xl mr-3">
        <span className="font-bold">Rating:</span>
        {rating}
      </p>
      <h1 className="text-xl md:text-3xl">Making Process:</h1>
      <p>{making_process}</p>
    </div>
  );
};

export default CoffeeDetails;

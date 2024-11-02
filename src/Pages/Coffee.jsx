import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/card";
const Coffee = () => {
  const data = useLoaderData();

  const [coffees, setCoffee] = useState(data);
  const handleSort = (sort) => {
    if (sort == "popularity") {
      const sorted = [...data].sort((a, b) => a.popularity - b.popularity);
      setCoffee(sorted);
    } else if (sort == "rating") {
      const sorted = [...data].sort((a, b) => a.rating - b.rating);
      setCoffee(sorted);
    }
  };
  return (
    <>
      <div className="md:flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bolde">
            Sort Coffee's by Popularity & Rating
          </h1>
        </div>
        <div className="flex gap-3 mt-10 md:mt-0">
          <button
            onClick={() => handleSort("popularity")}
            className="btn btn-warning font-bold"
          >
            Sort By Popularity
          </button>
          <button
            onClick={() => handleSort("rating")}
            className="btn btn-warning font-bold"
          >
            Sort By Rattiong
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
    </>
  );
};

export default Coffee;

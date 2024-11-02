import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./card";
const CoffeeCard = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const { category } = useParams();
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    if (category) {
      const categoryByData = [...data].filter(
        (coffee) => coffee.category === category
      );
      setCoffees(categoryByData);
    } else {
      setCoffees(data.slice(0, 6));
    }
  }, [data, category]);

  console.log(data);
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
      <button className="btn btn-warning" onClick={() => navigate("/coffee")}>
        View all
      </button>
    </>
  );
};

export default CoffeeCard;

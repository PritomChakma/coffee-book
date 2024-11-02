import { useLoaderData } from "react-router-dom";
import Card from "../components/card";
const Coffee = () => {
  const data = useLoaderData();
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {data.map((coffee) => (
        <Card key={coffee.id} coffee={coffee}></Card>
      ))}
    </div>
  );
};

export default Coffee;

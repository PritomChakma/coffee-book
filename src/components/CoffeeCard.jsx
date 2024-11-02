import { useParams } from "react-router-dom";
const CoffeeCard = () => {
  const { category } = useParams();
  console.log(category);
  return <div>Hello from coffee cards......{category}</div>;
};

export default CoffeeCard;

import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Heading from "../components/Heading";
const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      {/* Banner */}
      <Banner></Banner>
      {/* Heading */}
      <Heading
        title={"Browser Coffes By Category"}
        subtitle={
          "Choese Your Desier Category to browser though specific coffes that fit your tasty"
        }
      ></Heading>
      {/* categories tab section */}
      <Categories categories={categories}></Categories>
      {/* Dynamic nested component */}
      <Outlet></Outlet>
    </div>
  );
};

export default Home;

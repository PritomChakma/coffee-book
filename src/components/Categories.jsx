import { Link } from "react-router-dom";
const Categories = ({ categories }) => {
  return (
    <div role="tablist" className="tabs tabs-lifted">
      {categories.map((Category) => (
        <Link
          to={`/category/${Category.category}`}
          key={Category.category}
          role="tab"
          className="tab"
        >
          {Category.category}
        </Link>
      ))}
    </div>
  );
};

export default Categories;

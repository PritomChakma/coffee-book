import { NavLink } from "react-router-dom";
const Categories = ({ categories }) => {
  return (
    <div role="tablist" className="tabs tabs-lifted">
      {categories.map((Category) => (
        <NavLink
          to={`/category/${Category.category}`}
          key={Category.category}
          role="tab"
          className={({ isActive }) =>
            `tab text-2xl  ${isActive ? " tab-active" : ""}`
          }
        >
          {Category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;

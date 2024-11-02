const Card = ({ coffee }) => {
  const {
    name,
    image,
    category,
    ingredients,
    origin,
    type,
    id,
    rating,
    popularity,
  } = coffee || {};
  return (
    <div>
      <div className="card card-compact bg-base-100  shadow-xl my-12">
        <figure className="h-48 w-full">
          <img src={image} alt="coffee" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <span className="font-bold">Name:</span>
            {name}
          </h2>
          <p>
            <span className="font-bold mr-3">category:</span>
            {category}
          </p>
          <p>
            <span className="font-bold mr-3"> type:</span>
            {type}
          </p>
          <p>
            <span className="font-bold mr-3"> origin:</span>
            {origin}
          </p>
          <p>
            <span className="font-bold mr-3">rating:</span>
            {rating}
          </p>
          <p>
            <span className="font-bold mr-3">popularity:</span>
            {popularity}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;

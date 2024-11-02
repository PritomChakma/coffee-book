// get all coffee from local storage
const getFavourite = () => {
  const all = localStorage.getItem("favourites");

  if (all) {
    const favourites = JSON.parse(all);
    console.log(favourites);
    return favourites;
  } else {
    console.log([]);
    return [];
  }
};
// get a coffee to local storgae
const addFavourite = (coffee) => {
  const favourites = getFavourite();
  const isExist = favourites.find((item) => item.id == coffee.id);
  if (isExist) {
    return alert("already exist this");
  }
  console.log(favourites);
  favourites.push(coffee);
  localStorage.setItem("favourites", JSON.stringify(favourites));
};
export { addFavourite, getFavourite };

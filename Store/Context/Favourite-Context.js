import { createContext, useState } from "react";

export const FavouriteContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

export default function FavouritesContextProvider({ children }) {
  const [favouriteIds, setFavouriteIds] = useState([]);

  function addFavouriteHandler(id) {
    setFavouriteIds((previousIds) => [...previousIds, id]);
  }

  function removeFavouriteHandler(id) {
    setFavouriteIds((previousIds) =>
      previousIds.filter((mealId) => mealId != id)
    );
  }

  const value = {
    ids: favouriteIds,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
  };

  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  );
}

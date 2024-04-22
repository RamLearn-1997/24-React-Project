import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoritesList, setFavoritesList] = useState([]);
  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );

      const data = await response.json();
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParam("");
        navigate('/')
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSearchParam("");
    }
  }

  function handleAddFavorite(getCurrentItem) {
    let cpyFavoritesList = [...favoritesList];
  
    const index = cpyFavoritesList.findIndex((item) => item.id === getCurrentItem.id);
  
    if (index === -1) {
      cpyFavoritesList.push(getCurrentItem);
    } else {
      cpyFavoritesList.splice(index, 1); // Corrected line
    }
  
    setFavoritesList(cpyFavoritesList);
  }
  

  console.log(favoritesList, 'favoritesList');

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        recipeList,
        setSearchParam,
        handleSubmit,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddFavorite,
        favoritesList
      }}>
      {children}
    </GlobalContext.Provider>
  );
}

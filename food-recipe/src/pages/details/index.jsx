import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Details() {
  const { id } = useParams();
  const { recipeDetailsData, setRecipeDetailsData, favoritesList, handleAddFavorite } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await res.json(); // Await the response data
      if (data?.data) {
        setRecipeDetailsData(data?.data);
      }
    }

    getRecipeDetails();
  }, [id, setRecipeDetailsData]); // Add id and setRecipeDetailsData to the dependency array

  

  

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group mr-20">
          <img
            src={recipeDetailsData?.recipe?.image_url}
            alt={recipeDetailsData?.recipe?.title}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm mt-2 ml-2 text-cyan-700 font-medium">
          {recipeDetailsData?.recipe?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {recipeDetailsData?.recipe?.title}
        </h3>
        <div >
          <button onClick={()=> handleAddFavorite(recipeDetailsData?.recipe)} className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider inline-block mt-3 shadow-md bg-black text-white">
            {
                favoritesList && favoritesList.length > 0 && favoritesList.findIndex((item) => item.id === recipeDetailsData?.recipe?.id) !== -1 ? "Remove From Favorites" : "Add To Favorites"
            }
          </button>
        </div>
        <div className="ml-10">
            <span className="text-2xl font-semibold text-black">Ingredients :</span>
            <ul className="flex flex-col gap-3 mt-10 ml-5">

                  {
                    recipeDetailsData?.recipe?.ingredients.map((ingredient, index) => <li key={index}><span className="text-xl font-bold text-black">{ingredient.quantity} {ingredient.unit} </span>
                        <span className="text-xl font-medium text-black">{ingredient.description}</span>
                    </li> )
                  }
            </ul>
        </div>
      </div>
    </div>
  );
}

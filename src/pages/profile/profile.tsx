import React, { useState } from "react";
import { recipes, favoritedRecipes } from "../data";
import RecipeCard from "./recipeCard";
import FavoriteRecipeCard from "./favoriteRecipeCard";
import UserProfile from "./userProfile";

interface User {
  id: number;
  imageUrl: string;
}

interface RecipeCardProps {
  recipe: Recipe;
  showPublicacoes: boolean;
}

interface Recipe {
  id: number;
  imageUrl: string;
  title: string;
  type: string;
  preparationTime: string;
  description: string;
  likesCount: number;
  commentsCount: number;
  favoritesCount: number;
  favoritedByUsers?: User[];
}

interface FavoriteRecipeCardProps {
  recipe: FavoritedRecipe;
  showPublicacoes: boolean;
}

interface FavoritedRecipe extends Omit<Recipe, 'likesCount' | 'favoritedByUsers'> {
  favoritedBy: string;
  favoritedByUsers: User[];
}

type AnyRecipe = Recipe | FavoritedRecipe;

function ProfilePage() {
  const [showPublicacoes, setShowPublicacoes] = useState<boolean>(true);

  const handleShowPublicacoes = () => {
    setShowPublicacoes(true);
  };

  const handleShowFavoritos = () => {
    setShowPublicacoes(false);
  };

  const recipesToDisplay: AnyRecipe[] = showPublicacoes ? recipes : favoritedRecipes;

  return (
    <div className="flex">
      <div className="w-1/3">
        <UserProfile />
      </div>
      <div className="flex-1 p-4 bg-white h-screen">
        <div
          className="flex justify-between mx-auto p-4"
          style={{ maxWidth: "600px" }}
        >
          <div
            className={`flex items-center space-x-2 cursor-pointer`}
            onClick={handleShowPublicacoes}
          >
            <i className="fas fa-newspaper text-2xl text-color-orange"></i>
            <span className={`${
              showPublicacoes ? "font-bold" : ""
            }`}>Publicações</span>
          </div>
          <div
            className={`flex items-center space-x-2 cursor-pointer`}
            onClick={handleShowFavoritos}
          >
            <i className="far fa-heart text-2xl text-color-orange"></i>
            <span className={`${
              !showPublicacoes ? "font-bold" : ""
            }`}>Favoritos</span>
          </div>
        </div>
        <div className="flex justify-center items-center flex-1 overflow-y-auto h-full">
          {showPublicacoes ? (
            recipesToDisplay.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-full overflow-y-auto">
                {recipesToDisplay.map((recipe: any) => (
                  'likesCount' in recipe ? (
                    <RecipeCard
                      key={recipe.id}
                      recipe={recipe}
                      showPublicacoes={showPublicacoes}
                    />
                  ) : (
                    <FavoriteRecipeCard
                      key={recipe.id}
                      recipe={recipe}
                      showPublicacoes={showPublicacoes}
                    />
                  )
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center">
                <div className="bg-transparent border border-orange-600 rounded-full p-5 w-16 h-16 flex items-center justify-center mb-4">
                  <i className="fas fa-plus text-orange-500 text-4xl"></i>
                </div>
                <div className="text-center text-gray-700 text-2xl">
                  <p>Você ainda não publicou nenhuma receita.</p>
                </div>
              </div>
            )
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 -mt-36 ">
              {recipesToDisplay.length > 0 ? (
                recipesToDisplay.map((recipe: any) => (
                  'likesCount' in recipe ? (
                    <RecipeCard
                      key={recipe.id}
                      recipe={recipe}
                      showPublicacoes={showPublicacoes}
                    />
                  ) : (
                    <FavoriteRecipeCard
                      key={recipe.id}
                      recipe={recipe}
                      showPublicacoes={showPublicacoes}
                    />
                  )
                ))
              ) : (
                <div className="flex flex-col items-center justify-center -mr-96">
                  <div className="bg-transparent border border-orange-600 rounded-full p-5 w-16 h-16 flex items-center justify-center mb-4">
                    <i className="far fa-heart text-orange-500 text-4xl"></i>
                  </div>
                  <div className="text-center text-gray-700 text-2xl">
                    <p>Você ainda não possui nenhuma receita favoritada.</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

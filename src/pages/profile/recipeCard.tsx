import React from "react";


interface Recipe {
  imageUrl: string;
  title: string;
  type: string;
  preparationTime: string;
  description: string;
  likesCount: number;
  commentsCount: number;
  favoritesCount: number;
}

interface RecipeCardProps {
  recipe: Recipe;
  showPublicacoes: boolean;
}
function RecipeCard({ recipe, showPublicacoes }: RecipeCardProps) {
  
  function transformCase(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  function formatDescription(description: string): string {
    if (!description.startsWith('"')) {
      description = '"' + description;
    }
    if (!description.endsWith('"')) {
      description = description + '"';
    }
    return description[0] + description.charAt(1).toUpperCase() + description.slice(2).toLowerCase();
}


  return (
    <div className="p-4 m-2">
      <img
        src={recipe.imageUrl}
        alt={recipe.title}
        className="w-full h-48 object-cover rounded-md overflow-hidden"
      />
      <h2 className="text-xl font-bold mt-2 text-orange-600">{transformCase(recipe.title)}</h2>
      <p className="text-gray-400 uppercase">{recipe.type}</p>
      <p className="flex items-center mb-2">
        {" "}
        <i className="far fa-clock text-gray-400 mr-1"></i>{" "}
        {recipe.preparationTime}
      </p>
      <p className="text-gray-400">{formatDescription(recipe.description)}</p>
      <div className="flex space-x-4 mt-2 justify-between">
        {" "}
        <span className="flex items-center">
          <i className="far fa-heart text-red-500 mr-1"></i>{" "}
          <span>{recipe.likesCount}</span>
        </span>
        <span className="flex items-center">
          <i className="far fa-comment text-black mr-1"></i>{" "}
          <span>{recipe.commentsCount}</span>
        </span>
        <span className="flex items-center">
          <i className="far fa-star text-yellow-500 mr-1"></i>{" "}
          <span>{recipe.favoritesCount}</span>
        </span>
      </div>
    </div>
  );
}

export default RecipeCard;

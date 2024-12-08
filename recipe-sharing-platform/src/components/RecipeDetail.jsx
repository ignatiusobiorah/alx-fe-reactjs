import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams(); // Get recipe ID from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch data from local JSON file
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <h1 className="text-3xl font-bold text-blue-800 mb-4">{recipe.title}</h1>
        <p className="text-gray-700 mb-6">{recipe.summary}</p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ingredients</h2>
        <ul className="list-disc list-inside mb-6">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index} className="text-gray-600">
              {ingredient}
            </li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Instructions</h2>
        <ol className="list-decimal list-inside space-y-2">
          {recipe.instructions?.map((step, index) => (
            <li key={index} className="text-gray-600">
              {step}
            </li>
          ))}
        </ol>
        <Link
          to="/"
          className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default RecipeDetail;
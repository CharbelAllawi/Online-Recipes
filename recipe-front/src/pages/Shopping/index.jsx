import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ShoppingList from '../../components/ShoppingForm';
import { sendRequest } from '../../core/config/request';
import { requestMethods } from '../../core/enums/requestMethods';

function Shopping() {
  const [recipeData, setRecipeData] = useState([]);

  const getshoppingitems = async () => {
    const formData = new FormData();
    formData.append('istrue', 'true');

    try {
      const response = await sendRequest({
        body: formData,
        method: requestMethods.POST,
        route: '/getRecipeInfo',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response);

      // Assuming your response data is an array of recipes
      if (Array.isArray(response) && response.length > 0) {
        // Set the recipe data in state
        setRecipeData(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getshoppingitems();
  }, []);

  return (
    <>
      <Navbar />
      <div className="card-container">
        {recipeData.map((recipe) => (
          <ShoppingList key={recipe.recipe_id} recipeData={recipe} />

        ))}
      </div>
    </>
  );
}

export default Shopping;

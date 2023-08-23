import React from 'react';
import './style.css';
import MagicCardImage from "../../assets/authentication _Food.jpg";

const ShoppingForm = ({ recipeData }) => {
  const { name, cuisine, ingredients } = recipeData;

  // Splitting ingredients string into an array
  const ingredientList = ingredients[0].ingredients.split(', ');

  return (
    <div className="card-container">
      <div className="card-shopping">
        <div></div>
        <img src={MagicCardImage} alt="Magic Card" className="card-image" />
        <h2>Magic Card</h2>
        <div className='desc'>
          <div class="title">
            <h3>Title: {name}</h3>
            <h3>Cuisine: {cuisine}</h3>
          </div>          <ul>
            {ingredientList.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <a href="https://mythrillfiction.com/" target="_blank" rel="noopener noreferrer">
          Mythrill
        </a>
      </div>
    </div>
  );
};

export default ShoppingForm;

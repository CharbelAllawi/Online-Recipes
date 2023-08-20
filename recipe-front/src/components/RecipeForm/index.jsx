import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import chefAnimationData from './chef.json';
import './style.css';
import Input from '../../components/Input';
import Button from '../../components/Button';

function RecipeForm() {
  const container = useRef(null);
  const [Recipe, setRecipe] = useState({
    name: '',
    cuisine: '',
    ingredients: [],
    image: null,
  });
  const [isInputDisabled, setInputDisabled] = useState(false);
  const [PlaceHolder, setPlaceHolder] = useState("Type your ingredients here...");
  const [selectedQuantity, setSelectedQuantity] = useState('1'); // Store selected quantity as a string
  const [customQuantity, setCustomQuantity] = useState(''); // New state for custom quantity
  const ingredientInputRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleDoneClick = () => {
    setInputDisabled(true);
  };

  const handleMoreClick = () => {
    setInputDisabled(false);
    if (ingredientInputRef.current) {
      const ingredient = ingredientInputRef.current.value;
      const measurement = document.getElementById("measurement-names").value;
      const quantity = selectedQuantity === 'custom' ? customQuantity : parseInt(selectedQuantity, 10);

      if (ingredient && measurement && quantity > 0) {
        let newIngredient = `${quantity} ${measurement} ${ingredient}`;
        setRecipe({
          ...Recipe,
          ingredients: [...Recipe.ingredients, newIngredient],
        });
        ingredientInputRef.current.value = "";
        setSelectedQuantity('1'); // Reset selected quantity to default
        setCustomQuantity('');
      } else {
      }
    }
  };
  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      const fileObjects = Array.from(files).map(file => ({ file }));
      setRecipe(prevRecipe => ({
        ...prevRecipe,
        images: [...prevRecipe.images || [], ...fileObjects],
      }));
    }
  };

  useEffect(() => {
    if (container.current && !container.current.querySelector('svg')) {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: chefAnimationData,
      });
    }
  }, []);

  useEffect(() => {
    console.log(JSON.stringify(Recipe, null, 2));
    console.log(Recipe);
  }, [Recipe]);

  return (
    <div className="flex column center">
      <h1>Share your recipe<span className='drooling'>🤤</span></h1>
      <div className="container">
        <div ref={container}></div>
      </div>
      <form className="flex center column recipeform">
        <Input
          className="recipe"
          label={"Name"}
          placeholder={"Type your recipe name here..."}
          onChange={(name) =>
            setRecipe({
              ...Recipe,
              name,
            })
          }
        />
        <Input
          className="recipe"
          label={"Cuisine"}
          placeholder={"Type cuisine name here..."}
          onChange={(cuisine) =>
            setRecipe({
              ...Recipe,
              cuisine,
            })
          }
        />
        <Input
          className="recipe"
          label={"Ingredient"}
          placeholder={PlaceHolder}
          onChange={() => { }}
          disabled={isInputDisabled}
          inputRef={ingredientInputRef}
        />
        <div className='measure roundedMedium' style={{ display: isInputDisabled ? 'none' : 'block' }}>
          <select className='measurement' name="measurement-names" id="measurement-names">
            <option value="tsp">Teaspoon (tsp)</option>
            <option value="tbsp">Tablespoon (tbsp)</option>
            <option value="Cup">Cup</option>
            <option value="oz">Ounce (oz)</option>
            <option value="lb">Pound (lb)</option>
            <option value="g">Gram (g)</option>
            <option value="kg">Kilogram (kg)</option>
            <option value="ml">Milliliter (ml)</option>
            <option value="L">Liter (L)</option>
          </select>
          {selectedQuantity !== 'custom' ? ( // Render input field when not in "Custom" mode
            <input className='qtyinput'
              type="number"
              min="1"
              placeholder="Enter quantity"
              value={selectedQuantity}
              onChange={(e) => setSelectedQuantity(e.target.value)}
            />
          ) : (
            <input
              type="number"
              min="1"
              placeholder="Enter custom quantity"
              value={customQuantity}
              onChange={(e) => setCustomQuantity(e.target.value)}
            />
          )}
          <div className='flex'>
            <div className='morebtn'>
              <Button text={"Add"} isInputDisabled={isInputDisabled} onClick={handleMoreClick} />
            </div>
            <div className='donebtn' style={{ display: isInputDisabled ? 'none' : 'block' }}>
              <Button text={"Done"} isInputDisabled={isInputDisabled} onClick={handleDoneClick} />
            </div>
          </div>
        </div>
        <input
          className='fileinp roundedMedium'
          type='file'
          onChange={handleFileChange}
          ref={fileInputRef}
        />
        <br />
        <p className='addimages' >
          You can add as many images as you want by clicking on "Choose File."
        </p>
        <br />
        <Button text={"Share Recipe!"} isInputDisabled={isInputDisabled} onClick={handleDoneClick} />
      </form>
    </div>
  );
}

export default RecipeForm;
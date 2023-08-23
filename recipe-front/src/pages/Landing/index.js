import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Card from '../../components/Card';
import { sendRequest } from '../../core/config/request';
import { requestMethods } from '../../core/enums/requestMethods';
import './style.css';
import Button from '../../components/Button';

function Landing() {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCards, setFilteredCards] = useState([]);

  const getRecipesData = async () => {
    try {
      const response = await sendRequest({
        route: '/getRecipeInfo',
        method: requestMethods.POST
      });
      setCards(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipesData();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredCards(cards);
    } else {
      const filtered = cards.filter((cardData) => {
        const { cuisine, name, ingredients } = cardData;
        const cuisineMatch = cuisine?.toLowerCase()?.includes(searchQuery.toLowerCase()) || false;
        const nameMatch = name?.toLowerCase()?.includes(searchQuery.toLowerCase()) || false;
        const ingredientsMatch = ingredients?.some((ingredient) =>
          ingredient?.ingredients?.toLowerCase()?.includes(searchQuery.toLowerCase())
        ) || false;

        return cuisineMatch || nameMatch || ingredientsMatch;
      });
      setFilteredCards(filtered);
    }
  }, [searchQuery, cards]);

  return (
    <>
      <main>
        <nav className="search">
          <form action="#">
            <h1 className='lh1'>Home</h1>

            <input
              type="text"
              placeholder="Search by name, cuisine, and ingredients ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">
              <span className="fas fa-search"></span>
            </button>
          </form>
        </nav>
        <Navbar />
        <div>
          <ul className="cards">
            {filteredCards.map((cardData, index) => (
              <Card key={index} {...cardData} />
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default Landing;

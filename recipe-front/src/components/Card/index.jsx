import React from 'react';
import './style.css';
import Like from '../Like';
import Comment from '../Comment';
import shopingimg from '../../assets/shopping-cart.png';
import shopingimgfill from '../../assets/shopping-cart-fill.png';
import { sendRequest } from "../../core/config/request";
import { requestMethods } from "../../core/enums/requestMethods";
import {
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
} from 'react-share';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faIcons, faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Import shopping cart icon
import { FaShopware } from 'react-icons/fa';
import * as FaIcons from 'react-icons/fa';

const Card = ({ likes, liked, recipe_id, images, ingredients, name, cuisine }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleAddToCart = async () => {

    ingredients.forEach(async ingredient => {
      const formData = new FormData();
      formData.append('ingredients', ingredient.ingredients);
      formData.append('recipe_id', ingredient.recipe_id);

      try {

        const response = await sendRequest({
          method: "POST",
          route: "/addShopping",
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(response)
      } catch (error) {
        console.log(error);
      }
      console.log(ingredients)
    });
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const shareUrl = 'https://www.pakkamarwadi.tk/';

  return (
    <>
      <li className="cards__item">
        <div className="card">
          {/* Image container */}
          <div className="image-container">
            <button className="arrow-button" onClick={previousImage}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <img
              src={`http://localhost:8000/storage/images/posts/${images[currentImageIndex]}`}
              alt="Image"
            />
            <button className="arrow-button" onClick={nextImage}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>

          <div className="card__content">
            <div className="card__title">
              <div className="socialmedia">
                <FacebookShareButton
                  url={shareUrl}
                  quote={'Title or jo bhi aapko likhna ho'}
                  hashtag={'#portfolio...'}
                >
                  <FacebookIcon size={40} round={true} />
                </FacebookShareButton>

                <WhatsappShareButton
                  url={shareUrl}
                  quote={'Title or jo bhi aapko likhna ho'}
                  hashtag={'#portfolio...'}
                >
                  <WhatsappIcon size={40} round={true} />
                </WhatsappShareButton>

                <TwitterShareButton
                  url={shareUrl}
                  quote={'Title or jo bhi aapko likhna ho'}
                  hashtag={'#portfolio...'}
                >
                  <TwitterIcon size={40} round={true} />
                </TwitterShareButton>
                <RedditShareButton
                  url={shareUrl}
                  quote={'Title or jo bhi aapko likhna ho'}
                  hashtag={'#portfolio...'}
                >
                  <RedditIcon size={40} round={true} />
                </RedditShareButton>
              </div>

              <Like recipe_id={recipe_id} likes={likes} liked={liked} />
              <span className='shopimgdiv'>
                <img
                  className='shopimg'
                  onClick={handleAddToCart}
                  src={isHovered ? shopingimgfill : shopingimg}
                  alt="Shopping Cart"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                />
              </span>


            </div>
            <Comment recipe_id={recipe_id} />
          </div>
        </div>
      </li >
    </>
  );
};

export default Card;

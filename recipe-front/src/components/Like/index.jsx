import React, { useState, useEffect } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import axios from 'axios';
import './style.css';
import { sendRequest } from "../../core/config/request";
import { requestMethods } from "../../core/enums/requestMethods";

const Like = ({ likes, liked, recipe_id }) => {
  const [Liked, setLiked] = useState(liked);
  const [numberOfLikes, setNumberOfLikes] = useState(likes);

  const handleLikeAxios = async () => {
    const formData = new FormData();
    formData.append('recipe_id', recipe_id);
    try {
      const response = await sendRequest({
        method: "POST",
        route: Liked ? "/unlike" : "like",
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Update the state after a successful response
      setLiked(!Liked);
      setNumberOfLikes(Liked ? numberOfLikes - 1 : numberOfLikes + 1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // You can also place the Axios call here if you want to use useEffect
  }, [Liked]);

  const handleLikeClick = () => {
    // Update the state first
    setLiked(!Liked);
    setNumberOfLikes(Liked ? numberOfLikes - 1 : numberOfLikes + 1);

    // Then make the Axios call
    handleLikeAxios();
  }

  return (
    <div className='like flex row'>
      {Liked ? (
        <AiFillHeart
          size={30}
          className="text-danger"
          onClick={handleLikeClick}
          style={{ cursor: "pointer", color: "red" }}
        />
      ) : (
        <AiOutlineHeart
          size={30}
          onClick={handleLikeClick}
          style={{ cursor: "pointer" }}
        />
      )}
      <div className=''>
        <p>{numberOfLikes}</p>
      </div>
    </div>
  );
};

export default Like;

import React, { useState, useEffect } from 'react';
import './style.css';
import Button from '../Button';
import { sendRequest } from "../../core/config/request";
import { requestMethods } from "../../core/enums/requestMethods";
function Comment({ recipe_id }) {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const addComment = () => {
    if (commentText.trim() !== '') {
      const newComment = {
        text: commentText,
        date: new Date().toLocaleDateString(),
      };
      setComments([...comments, newComment]);
      addComments();
      setCommentText('');
    }

  };
  const addComments = async () => {
    const formData = new FormData();
    formData.append('recipe_id', recipe_id);
    formData.append('comment', commentText);

    try {
      const response = await sendRequest({
        method: "POST",
        route: "/addComment",
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

    } catch (error) {
      console.log(error);
    }
  };

  const getcomments = async () => {
    const formData = new FormData();
    formData.append('recipe_id', recipe_id);
    try {
      const response = await sendRequest({
        method: "POST",
        route: "/getComments",
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      response.comments.forEach(comment => {
        const newComment = {
          text: comment.text,
          date: comment.date,
        };
        setComments((comments) => [...comments, newComment]);
        setCommentText('');

      })
    } catch (error) {
      console.log(error);
    }

  };
  useEffect(() => {
    getcomments();

  }, [])




  return (
    <div className="mainbox">
      <div className="detailBox">
        <div className="actionBox">
          <ul className="commentList">
            {comments.map((comment, index) => (
              <li key={index}>
                <div className="commentText">
                  <p>{comment.text}</p> <span className="date sub-text">on {comment.date}</span>
                </div>
              </li>
            ))}
          </ul>
          <form className="form-inline" role="form">
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Your comments"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
            </div>
            <div className="form-group">
              <Button className="AddComment" text={'Add'} type="button" onClick={addComment}></Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Comment;

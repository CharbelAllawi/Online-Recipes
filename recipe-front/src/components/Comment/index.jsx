import React, { useState } from 'react';
import './style.css';
import Button from '../Button';

function Comment() {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const addComment = () => {
    if (commentText.trim() !== '') {
      const newComment = {
        text: commentText,
        date: new Date().toLocaleDateString(),
      };
      setComments([...comments, newComment]);
      setCommentText('');
    }
  };
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

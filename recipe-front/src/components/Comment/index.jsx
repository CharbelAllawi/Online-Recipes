import React from 'react'
import "./style.css";

function Comment() {
  const addComment = () => {
    console.log('hi')
  }
  return (
    <div className='mainbox'>
      <div class="detailBox">
        <div class="actionBox">
          <ul class="commentList">
            <li>
              <div class="commenterImage">
                <img src="http://placekitten.com/50/50" />
              </div>
              <div class="commentText">
                <p class="">Hello this is a test comment.</p> <span class="date sub-text">on March 5th, 2014</span>

              </div>
            </li>
            <li>
              <div class="commenterImage">
                <img src="http://placekitten.com/45/45" />
              </div>
              <div class="commentText">
                <p class="">Hello this is a test comment and this comment is particularly very long and it goes on and on and on.</p> <span class="date sub-text">on March 5th, 2014</span>

              </div>
            </li>
            <li>
              <div class="commenterImage">
                <img src="http://placekitten.com/40/40" />
              </div>
              <div class="commentText">
                <p class="">Hello this is a test comment.</p> <span class="date sub-text">on March 5th, 2014</span>

              </div>
            </li>
          </ul>
          <form class="form-inline" role="form">
            <div class="form-group">
              <input class="form-control" type="text" placeholder="Your comments" />
            </div>
            <div class="form-group">
              <button class="AddComment" onClick={addComment}>Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Comment
import React from 'react';
import './style.css';
import Like from '../Like';
import Comment from '../Comment';
import {
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon
} from 'react-share';
const Card = ({ image_url = "french-food.jpg", likes_count, post_id }) => {
  const shareUrl = 'https://www.pakkamarwadi.tk/';

  return (
    <>
      <li className="cards__item">
        <div className="card">
          <img src={`http://localhost:8000/storage/images/posts/${image_url}`} alt="Image" />
          <div className="card__content">
            <div className="card__title">










              
              <div className='socialmedia'>
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

                <LinkedinShareButton
                  url={shareUrl}
                  quote={'Title or jo bhi aapko likhna ho'}
                  hashtag={'#portfolio...'}
                >
                  <LinkedinIcon size={40} round={true} />
                </LinkedinShareButton>

                <RedditShareButton
                  url={shareUrl}
                  quote={'Title or jo bhi aapko likhna ho'}
                  hashtag={'#portfolio...'}
                >
                  <RedditIcon size={40} round={true} />
                </RedditShareButton>
              </div>


              <Like likes_count={likes_count} post_id={post_id} />
            </div>
            <Comment />
          </div>

        </div>

      </li>
    </>

  );
};

export default Card;

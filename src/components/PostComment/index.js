import React from 'react';
import './style.css';

function PostComment({ comment }) {
  
    return (
      <div id="comment">
        <div id="comment-user">
          <img src={ comment.author.avatar }/>
        </div>
        <div id="comment-text">
          <div>
            <b> { comment.author.name } </b> { comment.content }
          </div>
        </div>
      </div>
    );
  
}

export default PostComment;
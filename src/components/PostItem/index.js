import React from 'react';
import PostComment from '../PostComment';

import './style.css'

function PostItem({ post }) {
    return (
      <div id="post-item">
        <div id="post-user">
          <img src={ post.author.avatar } />
          <div>
            <span>
              { post.author.name }
            </span>
            <small>
              { post.date }
            </small>
          </div>
        </div>
        <div id="post-content">
          { post.content }
        </div>
        { post.comments.map(comment => <PostComment key={ comment.id + post.id } comment={ comment }/>)}
{/*         
        <PostComment/>
        <PostComment/> */}
      </div>
    );
}

export default PostItem;
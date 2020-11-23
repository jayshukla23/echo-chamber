import React from 'react';

import './post.style.scss';

function Post({ post, isOwnPost }) {

  const getFormattedDate = () => {
    if(post.timestamp) {
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      let dateObj = new Date(post.timestamp);
      let month = monthNames[dateObj.getMonth()];
      let day = String(dateObj.getDate()).padStart(2, '0');
      let year = dateObj.getFullYear();
      let hour = dateObj.getHours();
      let minutes = dateObj.getMinutes();
      let output = `${day} ${month}, ${year} - ${hour}:${minutes}`;
      return output;
    }
    return '';
  }

  return (
    <div className={`ecPost__container ${isOwnPost ? 'ecPost__own-post' : ''}`}>
      <div>
        {post.timestamp ? <p className="ecPost__timestamp">{getFormattedDate()}</p> : ''}
        <p className="ecPost__author">{ isOwnPost ? 'You' : post.author }</p>
      </div>
      <p className="ecPost__content">{post.content}</p>
    </div>
  )
}

export default Post;
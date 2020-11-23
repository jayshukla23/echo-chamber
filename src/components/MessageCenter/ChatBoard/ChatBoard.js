import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Post from './Post/Post';

import './chat-board.style.scss';

function ChatBoard({ currentHero, posts, addPost }) {
  const [content, setContent] = useState('');

  useEffect(() => {
    const el = document.querySelector('#chat-container');
    if(el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [posts]);

  function updatePostContent(e) {    
    setContent(e.target.value);
  }

  function publishPost() {
    if(!content || !content.trim().length) {
      return;
    }
    const post = {
      id: Date.now(),
      author: currentHero.name,
      content,
      timestamp: new Date(Date.now())
    };
    addPost(post);
    setContent('');
  }
  
  return (
    <div className="ecChat__board">
      <div className="ecChat__container" id="chat-container">
        {posts.map(post => <Post post={post} key={post.id} isOwnPost={post.author === currentHero.name} />)}
      </div> 
      <div className="ecChat__text-editor">
        <textarea rows="3" value={content} onChange={updatePostContent} />
        <div className="ecChat__send-btn" onClick={publishPost}>
          <img src="/send.svg" alt="Send" />
        </div>
      </div>     
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentHero: state.hero,
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {    
    addPost: post => { dispatch({type: 'ADD_POST', post }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatBoard);
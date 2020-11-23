/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Avatar from './Avatar/Avatar';
import avatarList from '../../util/avatarList';

import './avatar-selection.style.scss';

function AvatarSelection({ currentHero, history }) {  
  useEffect(() => {
    if(!currentHero || !currentHero.name) {
      history.push('/');
    } else if(currentHero.avatar.id) {
      history.push('/message-center');
    }
  }, [currentHero]);  

  return (
    <div className="ecAvatar__container">
      <p>Hey {currentHero.name}! Choose your hero avatar..</p>
      <div className="ecAvatar__list">
        {avatarList.map(avatar => {
          return <Avatar avatar={avatar} key={avatar.id} />
        })}
      </div>      
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentHero: state.hero,
  }
}

export default connect(mapStateToProps)(AvatarSelection);
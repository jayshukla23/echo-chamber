import React from 'react';
import { withRouter } from 'react-router-dom';
import './avatar.style.scss';

import { connect } from 'react-redux';

function Avatar({ avatar, setAvatar, history }) {  

  const goToMessageCenter = (heroAvatar) => {
    setAvatar(heroAvatar);
    history.push('/message-center');
  }

  return (
    <div className="ecAvatar__tile" onClick={() => goToMessageCenter(avatar)}>      
      <img src={avatar.image} alt={avatar.character} />      
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    setAvatar: avatar => { dispatch({type: 'SET_HERO_AVATAR', avatar }) }    
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Avatar));